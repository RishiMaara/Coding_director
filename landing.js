/* =============================================
   CODING DIRECTOR — Landing Page JS
   Particle canvas, scroll effects, counters
   ============================================= */

/* ===== PARTICLE SYSTEM ===== */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const COLORS = ['rgba(124,58,237,', 'rgba(6,182,212,', 'rgba(16,185,129,'];
  const COUNT = window.innerWidth < 768 ? 40 : 80;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, randomParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });

    // Draw faint connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(124,58,237,' + (0.06 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); });
})();

/* ===== NAVBAR SCROLL EFFECT ===== */
(function navbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ===== ACTIVE NAV LINK on scroll ===== */
(function activeNavLink() {
  const sections = ['hero', 'features', 'courses', 'trainers', 'pricing', 'about'];
  const links = {
    hero:     document.getElementById('nl-home'),
    features: document.getElementById('nl-features'),
    courses:  document.getElementById('nl-courses'),
    trainers: document.getElementById('nl-trainers'),
    pricing:  document.getElementById('nl-pricing'),
    about:    document.getElementById('nl-about'),
  };

  function update() {
    const scrollY = window.scrollY + 100;
    let current = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });
    Object.values(links).forEach(l => l && l.classList.remove('active'));
    if (links[current]) links[current].classList.add('active');
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ===== MOBILE HAMBURGER ===== */
(function mobileMenu() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? '' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '72px';
    links.style.left = '0'; links.style.right = '0';
    links.style.background = 'rgba(8,8,16,0.97)';
    links.style.padding = '12px 0';
    links.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
    links.style.backdropFilter = 'blur(20px)';
  });
})();

/* ===== STAGGER SCROLL REVEAL ===== */
(function staggerReveal() {
  const els = document.querySelectorAll('.stagger');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        // stagger by index within parent
        const siblings = [...e.target.parentElement.querySelectorAll('.stagger')];
        const i = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ===== ANIMATED STAT COUNTERS ===== */
(function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat-val[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 4);
        el.textContent = Math.floor(ease * target).toLocaleString();
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
})();

/* ===== SMOOTH SCROLL for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== FLOATING CARDS subtle mouse parallax ===== */
(function parallaxCards() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const cards = [
    document.getElementById('float-code'),
    document.getElementById('float-wpm'),
    document.getElementById('float-ach'),
  ];

  hero.addEventListener('mousemove', e => {
    const { clientX, clientY } = e;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (clientX - cx) / cx;
    const dy = (clientY - cy) / cy;

    cards.forEach((c, i) => {
      if (!c) return;
      const factor = (i + 1) * 5;
      c.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    cards.forEach(c => { if (c) c.style.transform = ''; });
  });
})();
