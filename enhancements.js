/* ============================================
   CODING DIRECTOR — Enhancements JS
   Widgets, animations, interactive features
   ============================================ */
'use strict';

// ============================================================
// QUOTES
// ============================================================
const QUOTES = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "Type it until you understand it.", author: "Coding Director" },
  { text: "Your fingers learn syntax so your mind can learn concepts.", author: "Coding Director" },
  { text: "The best way to learn to code is to actually write code every single day.", author: "Unknown" },
  { text: "Repetition is the mother of skill.", author: "Tony Robbins" },
  { text: "Slow is smooth, smooth is fast.", author: "Navy SEALs" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
];

function getDailyQuote() {
  const day = new Date().getDay() + new Date().getDate();
  return QUOTES[day % QUOTES.length];
}

// ============================================================
// ANIMATED COUNTER
// ============================================================
function animateCounter(el, target, duration) {
  if (!el || isNaN(target)) return;
  duration = duration || 1100;
  const suffix = el.dataset.suffix || '';
  const start  = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ============================================================
// FLOATING ORBS
// ============================================================
function initOrbs() {
  if (document.getElementById('cd-orbs')) return;
  const wrap = document.createElement('div');
  wrap.id = 'cd-orbs';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;';
  [
    { w:520,h:520,color:'#7c3aed',top:'-12%',left:'-6%',dur:'30s',delay:'0s' },
    { w:420,h:420,color:'#06b6d4',bottom:'-12%',right:'-6%',dur:'38s',delay:'-13s' },
    { w:320,h:320,color:'#10b981',top:'42%',left:'38%',dur:'24s',delay:'-8s' },
  ].forEach(cfg => {
    const o = document.createElement('div');
    const pos = cfg.top    ? `top:${cfg.top};`    : `bottom:${cfg.bottom};`;
    const pos2= cfg.left   ? `left:${cfg.left};`  : `right:${cfg.right};`;
    o.style.cssText = `position:absolute;width:${cfg.w}px;height:${cfg.h}px;background:${cfg.color};border-radius:50%;filter:blur(100px);opacity:0.045;${pos}${pos2}animation:orbFloat ${cfg.dur} ease-in-out infinite;animation-delay:${cfg.delay};`;
    wrap.appendChild(o);
  });
  document.body.prepend(wrap);
}

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#7c3aed','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#8b5cf6','#a78bfa'];
  const pieces = Array.from({length: 130}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -200 - 20,
    w: Math.random() * 10 + 5,
    h: Math.random() * 5 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 4 + 2,
    rot: Math.random() * 360,
    rotV: (Math.random() - 0.5) * 10,
    alpha: 1
  }));
  const t0 = Date.now();
  let raf;
  function draw() {
    const elapsed = Date.now() - t0;
    if (elapsed > 4200) {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      cancelAnimationFrame(raf);
      return;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += 0.09;
      p.rot += p.rotV;
      if (elapsed > 2800) p.alpha = Math.max(0, p.alpha - 0.018);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.rect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.fill();
      ctx.restore();
    });
    raf = requestAnimationFrame(draw);
  }
  draw();
}

// ============================================================
// ACHIEVEMENTS
// ============================================================
const ACHIEVEMENTS = [
  { id:'first_session', icon:'🎉', name:'First Steps',        desc:'Completed your first session!',   check: (s,all) => all.length === 1 },
  { id:'speed_25',      icon:'⚡', name:'Getting Fast',       desc:'Typed at 25+ WPM!',               check: s => s.wpm >= 25 },
  { id:'speed_50',      icon:'🚀', name:'Speed Demon',        desc:'Typed at 50+ WPM!',               check: s => s.wpm >= 50 },
  { id:'speed_80',      icon:'🔥', name:'Lightning Fingers',  desc:'Typed at 80+ WPM!',               check: s => s.wpm >= 80 },
  { id:'perfect_acc',   icon:'🎯', name:'Flawless',           desc:'100% accuracy in a session!',     check: s => s.accuracy === 100 },
  { id:'acc_95',        icon:'✅', name:'Sharp Eye',          desc:'95%+ accuracy!',                  check: s => s.accuracy >= 95 },
  { id:'ten_sessions',  icon:'🏆', name:'Dedicated',          desc:'10 practice sessions completed!', check: (s,all) => all.length === 10 },
  { id:'fifty_sessions',icon:'👑', name:'Master',             desc:'50 sessions completed!',          check: (s,all) => all.length === 50 },
  { id:'streak_3',      icon:'🔥', name:'On Fire',            desc:'3-day practice streak!',          check: () => (window.state?.streak?.current||0) >= 3 },
  { id:'streak_7',      icon:'💎', name:'Week Warrior',       desc:'7-day practice streak!',          check: () => (window.state?.streak?.current||0) >= 7 },
];

let unlockedAch = [];
try { unlockedAch = JSON.parse(localStorage.getItem('cd_achievements') || '[]'); } catch(e) {}

function checkAchievements(session) {
  const all = window.state?.sessions || [];
  ACHIEVEMENTS.forEach(ach => {
    if (unlockedAch.includes(ach.id)) return;
    try {
      if (ach.check(session, all)) {
        unlockedAch.push(ach.id);
        localStorage.setItem('cd_achievements', JSON.stringify(unlockedAch));
        setTimeout(() => showAchievement(ach.icon, ach.name, ach.desc), 1800);
      }
    } catch(e) {}
  });
}

function showAchievement(icon, name, desc) {
  const p = document.createElement('div');
  p.className = 'achievement-popup';
  p.innerHTML = `
    <div class="ach-icon">${icon}</div>
    <div>
      <div class="ach-title">Achievement Unlocked!</div>
      <div class="ach-name">${name}</div>
      <div class="ach-desc">${desc}</div>
    </div>
  `;
  document.body.appendChild(p);
  setTimeout(() => {
    p.style.animation = 'achieveIn 0.4s reverse forwards';
    setTimeout(() => p.remove(), 420);
  }, 4500);
}

// ============================================================
// SPARKLINE
// ============================================================
function renderSparkline(containerId, data) {
  const c = document.getElementById(containerId);
  if (!c) return;
  if (data.length < 2) {
    c.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:8px 0;line-height:1.5">Complete more sessions to<br>see your WPM trend here.</div>';
    return;
  }
  const W = c.clientWidth || 180;
  const H = 50;
  const pad = 4;
  const min = Math.min(...data) * 0.85;
  const max = Math.max(...data) * 1.12 || 10;
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = pad + (i/(data.length-1)) * (W - pad*2);
    const y = pad + (1 - (v-min)/range) * (H - pad*2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const area = `${pts[0].split(',')[0]},${H} ${pts.join(' ')} ${pts[pts.length-1].split(',')[0]},${H}`;
  c.innerHTML = `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" class="sparkline-svg">
      <defs>
        <linearGradient id="spkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <polygon points="${area}" fill="url(#spkGrad)"/>
      <polyline points="${pts.join(' ')}" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${data.map((v,i) => {
        const [x,y] = pts[i].split(',');
        const isLast = i === data.length-1;
        return `<circle cx="${x}" cy="${y}" r="${isLast?4:2.5}" fill="${isLast?'#06b6d4':'rgba(6,182,212,0.5)'}">${isLast?`<title>${v} WPM</title>`:''}</circle>`;
      }).join('')}
    </svg>
  `;
}

// ============================================================
// LANG PROGRESS BARS
// ============================================================
function renderLangProgress(containerId) {
  const c = document.getElementById(containerId);
  if (!c || !window.getLangMeta) return;
  const lessons = window.state?.lessons || [];
  if (!lessons.length) { c.innerHTML = '<div style="color:var(--text-muted);font-size:12px">No lessons yet.</div>'; return; }
  const counts = {};
  lessons.forEach(l => counts[l.language] = (counts[l.language]||0)+1);
  const total = lessons.length;
  const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const barColors = ['#7c3aed','#06b6d4','#10b981','#f59e0b','#ef4444'];
  c.innerHTML = `<div class="lang-progress">
    ${sorted.map(([lang, count], i) => {
      const meta = getLangMeta(lang);
      const pct  = (count/total*100).toFixed(0);
      return `
        <div class="lang-progress-row">
          <span class="lang-progress-name">${meta.icon} ${meta.label}</span>
          <div class="lang-progress-bar">
            <div class="lang-progress-fill" style="width:0%;background:${barColors[i]}" data-pct="${pct}"></div>
          </div>
          <span class="lang-progress-count">${count}</span>
        </div>
      `;
    }).join('')}
  </div>`;
  setTimeout(() => {
    c.querySelectorAll('.lang-progress-fill').forEach(el => el.style.width = el.dataset.pct + '%');
  }, 120);
}

// ============================================================
// STREAK CALENDAR
// ============================================================
function renderStreakCalendar(containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const today = new Date();
  const sessions = window.state?.sessions || [];
  const practicedDays = new Set(sessions.map(s => new Date(s.timestamp).toDateString()));
  let html = '<div class="streak-cal-title">Last 14 Days</div><div class="streak-calendar">';
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const ds = d.toDateString();
    const practiced = practicedDays.has(ds);
    const isToday = i === 0;
    html += `<div class="streak-day${practiced?' practiced':''}${isToday?' today':''}" title="${ds}${practiced?' ✓ Practiced':''}"></div>`;
  }
  html += '</div>';
  c.innerHTML = html;
}

// ============================================================
// DAILY CHALLENGE
// ============================================================
const CHALLENGES = [
  { emoji:'🏃', title:'Speed Run',   desc:'Complete 3 practice sessions today', target:3 },
  { emoji:'🎯', title:'Sharpen Up',  desc:'Achieve 95%+ accuracy twice today',  target:2 },
  { emoji:'⚡', title:'WPM Boost',   desc:'Beat your personal best WPM today',  target:1 },
  { emoji:'📚', title:'Poly-Coder',  desc:'Practice 2 different languages today',target:2 },
  { emoji:'🔥', title:'Stay Hot',    desc:'Practice 4 lessons today',           target:4 },
  { emoji:'💎', title:'Flawless',    desc:'Finish a session with 100% accuracy',target:1 },
  { emoji:'🚀', title:'Full Blast',  desc:'Complete 5 sessions today',          target:5 },
];

function renderDailyChallenge(containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const ch = CHALLENGES[new Date().getDay()];
  const todaySessions = (window.state?.sessions||[]).filter(s =>
    new Date(s.timestamp).toDateString() === new Date().toDateString()
  );
  const done = Math.min(todaySessions.length, ch.target);
  const pct  = Math.round(done / ch.target * 100);
  const complete = done >= ch.target;
  c.innerHTML = `
    <div class="daily-challenge" onclick="navigate('lessons')" title="Go to Lessons">
      <div class="daily-challenge-icon">${complete ? '✅' : ch.emoji}</div>
      <div class="daily-challenge-text">
        <div class="daily-challenge-title">📅 Daily Challenge — ${ch.title}</div>
        <div class="daily-challenge-desc">${ch.desc}</div>
        <div class="daily-challenge-progress">
          <div class="challenge-bar">
            <div class="challenge-bar-fill" style="width:0%" id="ch-fill"></div>
          </div>
          <span class="challenge-pct">${done}/${ch.target}</span>
        </div>
      </div>
    </div>
  `;
  setTimeout(() => {
    const fill = document.getElementById('ch-fill');
    if (fill) fill.style.width = pct + '%';
  }, 100);
}

// ============================================================
// LOADING SCREEN
// ============================================================
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const video  = document.getElementById('loading-video');
  if (!screen) return;

  function dismiss() {
    screen.classList.add('done');
    setTimeout(() => screen.remove(), 800);
  }

  if (video) {
    video.addEventListener('ended', dismiss);
  }

  // Hard cap — dismiss after 7 seconds regardless
  setTimeout(dismiss, 7000);
}

// ============================================================
// STAGGER ANIMATION
// ============================================================
function staggerIn(selector, baseDelay) {
  baseDelay = baseDelay || 0.05;
  const items = document.querySelectorAll(selector);
  items.forEach((el, i) => {
    el.classList.add('stagger-anim');
    el.style.transitionDelay = `${(i * baseDelay).toFixed(2)}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
  });
}

// ============================================================
// INJECT DASHBOARD WIDGETS
// ============================================================
function injectDashboardWidgets() {
  const page = document.getElementById('page-dashboard');
  if (!page) return;

  const subtitle = page.querySelector('.page-subtitle');

  // Quote
  if (subtitle && !page.querySelector('.quote-widget')) {
    const q = getDailyQuote();
    const qEl = document.createElement('div');
    qEl.className = 'quote-widget';
    qEl.innerHTML = `<div class="quote-mark">"</div><div><div class="quote-text">${q.text}</div><div class="quote-author">— ${q.author}</div></div>`;
    subtitle.insertAdjacentElement('afterend', qEl);
  }

  // Daily challenge
  const statsGrid = page.querySelector('.stats-grid');
  if (statsGrid && !page.querySelector('.daily-challenge')) {
    const wrap = document.createElement('div');
    wrap.id = 'dc-wrap';
    statsGrid.insertAdjacentElement('afterend', wrap);
    renderDailyChallenge('dc-wrap');
  }

  // Charts section
  const actList = page.querySelector('.activity-list');
  if (actList && !page.querySelector('.chart-section')) {
    const sec = document.createElement('div');
    sec.className = 'chart-section';
    sec.innerHTML = `
      <div class="chart-card">
        <div class="chart-card-title">⚡ WPM Trend <span style="font-size:10px;font-weight:400;color:var(--text-muted)">(last 10 sessions)</span></div>
        <div id="wpm-sparkline" style="width:100%"></div>
      </div>
      <div class="chart-card">
        <div class="chart-card-title">📚 Lesson Languages</div>
        <div id="lang-progress-wrap" style="margin-top:4px"></div>
      </div>
    `;
    actList.insertAdjacentElement('afterend', sec);
    const wpmData = (window.state?.sessions || []).slice(-10).map(s => s.wpm);
    setTimeout(() => {
      renderSparkline('wpm-sparkline', wpmData);
      renderLangProgress('lang-progress-wrap');
    }, 80);
  }

  // Animate stat counters
  page.querySelectorAll('.stat-value').forEach(el => {
    const raw = parseInt(el.textContent.replace(/[^0-9]/g, '')) || 0;
    const hasPct = el.textContent.includes('%');
    el.dataset.suffix = hasPct ? '%' : '';
    el.textContent = '0' + (hasPct ? '%' : '');
    animateCounter(el, raw);
  });

  // Wave divider between quick-actions and activity
  const qActions = page.querySelector('.quick-actions');
  if (qActions && !page.querySelector('.wave-divider')) {
    const wave = document.createElement('div');
    wave.className = 'wave-divider';
    qActions.insertAdjacentElement('afterend', wave);
  }

  // Stagger cards
  staggerIn('.stat-card', 0.07);
  staggerIn('.quick-action-card', 0.08);
}

// Streak calendar in sidebar footer
function injectStreakCal() {
  const footer = document.querySelector('.sidebar-footer');
  if (!footer || footer.querySelector('.streak-calendar-wrap')) return;
  const wrap = document.createElement('div');
  wrap.className = 'streak-calendar-wrap';
  wrap.id = 'sidebar-streak-cal';
  footer.appendChild(wrap);
  renderStreakCalendar('sidebar-streak-cal');
}

// ============================================================
// HOOK INTO EXISTING FUNCTIONS
// ============================================================
function applyHooks() {
  // Patch navigate
  const _origNav = window.navigate;
  if (_origNav && !_origNav._enhanced) {
    window.navigate = function(page, skipSave) {
      _origNav.call(window, page, skipSave);
      requestAnimationFrame(() => {
        if (page === 'dashboard') {
          injectDashboardWidgets();
          injectStreakCal();
        }
        if (page === 'lessons') staggerIn('.lesson-card', 0.055);
        if (page === 'drills')  staggerIn('.drill-card', 0.055);
      });
    };
    window.navigate._enhanced = true;
  }

  // Patch showResults (confetti + achievements)
  const _origSR = window.showResults;
  if (_origSR && !_origSR._enhanced) {
    window.showResults = function(args) {
      launchConfetti();
      if (args && args.session) checkAchievements(args.session);
      _origSR.call(window, args);
    };
    window.showResults._enhanced = true;
  }
}

// Global keydown: if user presses any printable key while on practice page,
// focus the textarea automatically (covers the case where auto-focus failed)
document.addEventListener('keydown', function(e) {
  const practicePage = document.getElementById('page-practice');
  if (!practicePage || practicePage.classList.contains('hidden')) return;
  if (!window.state?.typingSession) return;
  const input = document.getElementById('typing-input');
  if (!input) return;

  // If input is not focused and user presses a printable key, focus it
  if (document.activeElement !== input) {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      input.focus();
    }
  }

  // Error flash on wrong character
  setTimeout(() => {
    const val    = input.value;
    const target = window.state?.typingSession?.target;
    if (!target || val.length === 0) return;
    const lastIdx = val.length - 1;
    const isErr   = val[lastIdx] !== target[lastIdx];
    if (isErr) {
      const ta = document.getElementById('typing-area');
      if (ta) {
        ta.classList.add('err-flash');
        setTimeout(() => ta.classList.remove('err-flash'), 220);
      }
    }
  }, 0);
});

// ============================================================
// INIT
// ============================================================
function initEnhancements() {
  initLoadingScreen();
  initOrbs();
  applyHooks();
  injectStreakCal();

  // Run dashboard widgets if already on dashboard
  if (window.state?.currentPage === 'dashboard') {
    requestAnimationFrame(() => {
      injectDashboardWidgets();
    });
  }
}

// Wait for app.js to finish initializing
if (document.readyState === 'complete') {
  setTimeout(initEnhancements, 120);
} else {
  window.addEventListener('load', () => setTimeout(initEnhancements, 120));
}
