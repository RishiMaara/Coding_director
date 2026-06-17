/* ============================================================
   CODING DIRECTOR — Auth & Database
   Firebase Authentication + Firestore
   ============================================================ */
'use strict';

let _auth = null, _db = null, _currentUser = null, _fbReady = false;
let _saveTimer = null;
let _authMode  = 'login'; // 'login' | 'register'

// ============================================================
// INIT FIREBASE
// ============================================================
function initDB() {
  // If user already chose guest this session, skip overlay
  if (localStorage.getItem('cd_guest_mode') === '1') {
    closeAuthOverlay();
    updateSidebarUser(null);
    return;
  }

  const isPlaceholder = typeof firebaseConfig === 'undefined' ||
    !firebaseConfig.apiKey || firebaseConfig.apiKey.startsWith('PASTE_');

  if (isPlaceholder) {
    // Firebase not configured — show overlay but disable Firebase options
    openAuthOverlay();
    disableFirebaseOptions('Firebase not configured — edit firebase-config.js to enable. Only guest mode available.');
    return;
  }

  // Detect file:// protocol — Google popup won't work
  if (window.location.protocol === 'file:') {
    openAuthOverlay();
    showFileProtocolWarning();
  }

  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    _auth    = firebase.auth();
    _db      = firebase.firestore();
    _fbReady = true;
    // onAuthStateChanged will call openAuthOverlay / closeAuthOverlay
    _auth.onAuthStateChanged(onAuthChange);
  } catch (e) {
    console.warn('[Auth] Firebase init error:', e.message);
    openAuthOverlay();
    disableFirebaseOptions('Firebase error: ' + e.message);
  }
}

// ============================================================
// DISABLE FIREBASE OPTIONS (when not configured)
// ============================================================
function disableFirebaseOptions(msg) {
  // Dim/disable Google button
  const googleBtn = document.getElementById('btn-google');
  if (googleBtn) {
    googleBtn.disabled = true;
    googleBtn.style.opacity = '0.38';
    googleBtn.style.cursor = 'not-allowed';
    googleBtn.title = msg;
  }
  // Dim/disable email submit
  const emailBtn = document.getElementById('btn-email-submit');
  if (emailBtn) {
    emailBtn.disabled = true;
    emailBtn.style.opacity = '0.38';
    emailBtn.style.cursor = 'not-allowed';
  }
  // Dim inputs
  ['auth-email','auth-pwd','auth-name'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.disabled = true; el.style.opacity = '0.4'; el.style.cursor = 'not-allowed'; }
  });
  // Show config notice
  let notice = document.getElementById('auth-config-notice');
  if (!notice) {
    notice = document.createElement('div');
    notice.id = 'auth-config-notice';
    notice.className = 'auth-config-notice';
    const card = document.querySelector('.auth-card');
    if (card) card.insertBefore(notice, card.lastElementChild);
  }
  notice.innerHTML = `
    <span>⚙️</span>
    <span>Firebase not set up &mdash; <strong>only Guest mode works</strong>.
    Edit <code>firebase-config.js</code> to unlock Google &amp; email sign-in.</span>
  `;
}

function showFileProtocolWarning() {
  const el = document.getElementById('auth-protocol-warn');
  if (el) el.style.display = 'flex';
}

// ============================================================
// AUTH STATE HANDLER (Firebase configured case)
// ============================================================
async function onAuthChange(user) {
  _currentUser = user;
  if (user) {
    localStorage.removeItem('cd_guest_mode');
    closeAuthOverlay();
    updateSidebarUser(user);
    await pullFromFirestore(user.uid);
    if (typeof navigate === 'function') {
      navigate(state?.currentPage || 'dashboard', true);
    }
  } else {
    // Only show overlay if user hasn't explicitly signed out to guest
    if (localStorage.getItem('cd_guest_mode') !== '1') {
      openAuthOverlay();
    }
    updateSidebarUser(null);
  }
}

// ============================================================
// FIRESTORE READ / WRITE
// ============================================================
async function pullFromFirestore(uid) {
  if (!_db) return;
  try {
    const snap = await _db.collection('users').doc(uid).get();
    if (snap.exists) {
      const d = snap.data();
      if (Array.isArray(d.lessons))  state.lessons  = d.lessons;
      if (Array.isArray(d.sessions)) state.sessions = d.sessions.slice(-300);
      if (d.settings) state.settings = Object.assign({}, state.settings, d.settings);
      if (d.streak)   state.streak   = d.streak;
      try {
        localStorage.setItem('cd_lessons',  JSON.stringify(state.lessons));
        localStorage.setItem('cd_sessions', JSON.stringify(state.sessions));
        localStorage.setItem('cd_settings', JSON.stringify(state.settings));
        localStorage.setItem('cd_streak',   JSON.stringify(state.streak));
      } catch (_) {}
      showSyncStatus('✓ Synced from cloud', true);
    } else {
      await pushToFirestore();
      showSyncStatus('✓ Data uploaded to cloud', true);
    }
  } catch (e) {
    console.warn('[DB] Pull error:', e.message);
    showSyncStatus('⚠ Sync failed (offline?)', false);
  }
}

async function pushToFirestore() {
  if (!_db || !_currentUser) return;
  try {
    await _db.collection('users').doc(_currentUser.uid).set({
      lessons:  state.lessons  || [],
      sessions: (state.sessions || []).slice(-300),
      settings: state.settings || {},
      streak:   state.streak   || {},
      profile: {
        uid:      _currentUser.uid,
        email:    _currentUser.email    || null,
        name:     _currentUser.displayName || null,
        photoURL: _currentUser.photoURL || null,
      },
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    showSyncStatus('☁ Saved', true);
  } catch (e) {
    console.warn('[DB] Push error:', e.message);
  }
}

let _saveDebounce = null;
window.dbSave = function() {
  clearTimeout(_saveDebounce);
  _saveDebounce = setTimeout(pushToFirestore, 2200);
};

// ============================================================
// SIGN IN / OUT
// ============================================================
window.authGoogle = async function() {
  if (!_auth) { showAuthMsg('Firebase not configured. Edit firebase-config.js.', true); return; }
  if (window.location.protocol === 'file:') {
    showAuthMsg('Open via localhost for Google sign-in. Run: npx http-server .', true);
    return;
  }
  try {
    setAuthBusy(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    await _auth.signInWithPopup(provider);
  } catch (e) {
    setAuthBusy(false);
    showAuthMsg(mapFirebaseError(e.code), true);
  }
};

window.authEmail = async function() {
  if (!_auth) { showAuthMsg('Firebase not configured. Edit firebase-config.js.', true); return; }
  const email = document.getElementById('auth-email')?.value?.trim();
  const pwd   = document.getElementById('auth-pwd')?.value;
  const name  = document.getElementById('auth-name')?.value?.trim();
  if (!email)              { showAuthMsg('Please enter your email.', true); return; }
  if (!pwd || pwd.length < 6) { showAuthMsg('Password must be at least 6 characters.', true); return; }
  try {
    setAuthBusy(true);
    if (_authMode === 'register') {
      const cred = await _auth.createUserWithEmailAndPassword(email, pwd);
      if (name) await cred.user.updateProfile({ displayName: name });
    } else {
      await _auth.signInWithEmailAndPassword(email, pwd);
    }
  } catch (e) {
    setAuthBusy(false);
    showAuthMsg(mapFirebaseError(e.code), true);
  }
};

window.authSignOut = async function() {
  if (!_auth) {
    localStorage.setItem('cd_guest_mode', '1');
    closeAuthOverlay();
    updateSidebarUser(null);
    return;
  }
  try {
    localStorage.setItem('cd_guest_mode', '1');
    await _auth.signOut();
  } catch(e) {}
};

function mapFirebaseError(code) {
  const map = {
    'auth/user-not-found':        'No account found with this email.',
    'auth/wrong-password':        'Incorrect password. Try again.',
    'auth/email-already-in-use':  'Email already in use. Sign in instead.',
    'auth/weak-password':         'Password must be at least 6 characters.',
    'auth/invalid-email':         'Please enter a valid email address.',
    'auth/popup-closed-by-user':  'Sign-in popup was closed.',
    'auth/network-request-failed':'Network error. Check your connection.',
    'auth/popup-blocked':         'Popups are blocked. Allow them and retry.',
    'auth/too-many-requests':     'Too many attempts. Wait a moment and retry.',
    'auth/invalid-credential':    'Incorrect email or password.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}

// ============================================================
// OVERLAY HELPERS
// ============================================================
function openAuthOverlay()  {
  document.getElementById('auth-overlay')?.classList.remove('hidden');
}
function closeAuthOverlay() {
  document.getElementById('auth-overlay')?.classList.add('hidden');
}

function setAuthBusy(on) {
  const btn  = document.getElementById('btn-email-submit');
  const gBtn = document.getElementById('btn-google');
  if (btn)  { btn.disabled = on;  btn.textContent = on ? 'Please wait…' : (_authMode === 'register' ? 'Create Account' : 'Sign In'); }
  if (gBtn) gBtn.disabled = on;
}

function showAuthMsg(msg, isErr) {
  const el = document.getElementById('auth-msg');
  if (!el) return;
  el.textContent  = msg;
  el.style.color  = isErr ? '#ef4444' : '#10b981';
  el.style.opacity = '1';
  setTimeout(() => { if (el.textContent === msg) el.style.opacity = '0'; }, 5500);
}

function showSyncStatus(msg, ok) {
  const el = document.getElementById('sidebar-sync-status');
  if (!el) return;
  el.textContent = msg;
  el.style.color = ok ? 'var(--accent-green)' : '#f59e0b';
  el.style.opacity = '1';
  setTimeout(() => el.style.opacity = '0', 3500);
}

// ============================================================
// SIDEBAR USER PROFILE
// ============================================================
function updateSidebarUser(user) {
  const nameEl    = document.getElementById('user-display-name');
  const statusEl  = document.getElementById('user-status-text');
  const avatarEl  = document.getElementById('user-avatar-img');
  const avatarWrap= document.getElementById('user-avatar-wrap');
  const signInBtn = document.getElementById('sidebar-sign-in-btn');
  const signOutBtn= document.getElementById('sidebar-sign-out-btn');
  const syncDot   = document.getElementById('sync-dot');

  if (user) {
    if (nameEl)   nameEl.textContent   = user.displayName || user.email?.split('@')[0] || 'User';
    if (statusEl) { statusEl.textContent = '☁ Cloud sync on'; statusEl.className = 'user-status synced'; }
    if (user.photoURL && avatarEl) {
      avatarEl.src = user.photoURL;
      if (avatarWrap) { avatarWrap.style.display = 'flex'; avatarWrap.dataset.initial = ''; }
    } else {
      if (avatarEl) avatarEl.src = '';
      const initial = (user.displayName || user.email || 'U')[0].toUpperCase();
      if (avatarWrap) { avatarWrap.style.display = 'flex'; avatarWrap.dataset.initial = initial; }
    }
    if (syncDot)    syncDot.classList.add('online');
    if (signInBtn)  signInBtn.style.display  = 'none';
    if (signOutBtn) signOutBtn.style.display = 'flex';
  } else {
    if (nameEl)   nameEl.textContent   = 'Guest';
    if (statusEl) {
      statusEl.textContent = _fbReady ? '⚡ Click to sign in' : '💾 Local mode';
      statusEl.className   = 'user-status';
    }
    if (avatarWrap) avatarWrap.style.display = 'none';
    if (syncDot)    syncDot.classList.remove('online');
    if (signInBtn)  signInBtn.style.display  = 'flex';
    if (signOutBtn) signOutBtn.style.display = 'none';
  }
}

// ============================================================
// AUTH OVERLAY EVENTS
// ============================================================
function initAuthEvents() {
  // Google
  document.getElementById('btn-google')?.addEventListener('click', window.authGoogle);

  // Email submit
  document.getElementById('btn-email-submit')?.addEventListener('click', window.authEmail);
  document.getElementById('auth-pwd')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') window.authEmail();
  });
  document.getElementById('auth-email')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('auth-pwd')?.focus();
  });

  // Toggle login ↔ register
  document.getElementById('auth-toggle')?.addEventListener('click', e => {
    e.preventDefault();
    _authMode = _authMode === 'login' ? 'register' : 'login';
    const isReg    = _authMode === 'register';
    const heading  = document.getElementById('auth-form-heading');
    const submitBtn= document.getElementById('btn-email-submit');
    const toggle   = document.getElementById('auth-toggle');
    const nameWrap = document.getElementById('auth-name-wrap');
    if (heading)   heading.textContent   = isReg ? 'Create Account'  : 'Sign In';
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = isReg ? 'Create Account' : 'Sign In';
    if (toggle)    toggle.textContent    = isReg ? 'Already have an account? Sign in →' : "Don't have an account? Register →";
    if (nameWrap)  nameWrap.style.display = isReg ? 'block' : 'none';
    const msgEl = document.getElementById('auth-msg');
    if (msgEl) msgEl.style.opacity = '0';
  });

  // Guest — saves preference so overlay doesn't reopen
  document.getElementById('btn-guest')?.addEventListener('click', () => {
    localStorage.setItem('cd_guest_mode', '1');
    closeAuthOverlay();
    updateSidebarUser(null);
    showSyncStatus('Guest mode — data saved locally only.', false);
  });

  // Sidebar "Sign in" button re-opens overlay
  document.getElementById('sidebar-sign-in-btn')?.addEventListener('click', () => {
    localStorage.removeItem('cd_guest_mode');
    openAuthOverlay();
  });

  // Sign out
  document.getElementById('sidebar-sign-out-btn')?.addEventListener('click', window.authSignOut);
}

// ============================================================
// PATCH saveData → ALSO SYNC TO FIRESTORE
// ============================================================
function patchSaveData() {
  if (!window.saveData || window.saveData._dbPatched) return;
  const orig = window.saveData;
  window.saveData = function() {
    orig.call(window);
    window.dbSave?.();
  };
  window.saveData._dbPatched = true;
}

// ============================================================
// STARTUP
// ============================================================
(function startup() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  function run() {
    initAuthEvents();
    setTimeout(() => {
      patchSaveData();
      initDB();
    }, 160);
  }
})();
