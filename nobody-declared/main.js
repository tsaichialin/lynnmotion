'use strict';

// ── Back to top ──────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('btt-visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    const start = window.scrollY;
    const duration = Math.min(680, Math.max(420, start * 0.45));
    let startTime = null;

    function ease(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }

    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, start * (1 - ease(progress)));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
}

// ── Split title words into per-character spans ───────────────────────────────
function splitIntoLetters() {
  document.querySelectorAll('.nd-title .nd-title-word').forEach(word => {
    const chars = [...word.textContent];
    word.textContent = '';
    chars.forEach(char => {
      const s = document.createElement('span');
      s.className = 'nd-letter';
      s.textContent = char === ' ' ? ' ' : char;
      // Independent random drift scales for X and Y axes
      s.style.setProperty('--d',  (Math.random() * 2 - 1).toFixed(3));
      s.style.setProperty('--dv', (Math.random() * 2 - 1).toFixed(3));
      // Small random delay jitter so characters don't all move in lockstep
      s.style.setProperty('--letter-delay', (1.0 + Math.random() * 0.08 - 0.04).toFixed(3) + 's');
      word.appendChild(s);
    });
  });
}

// ── Hero Animation Replay ────────────────────────────────────────────────────
function initHeroAnimation() {
  const hero = document.querySelector('.nd-hero');
  if (!hero) return;

  const animEls = [
    hero.querySelector('.nd-title--a'),
    hero.querySelector('.nd-title--b'),
  ].filter(Boolean);

  function replayAnimations() {
    const all = [...animEls, ...hero.querySelectorAll('.nd-letter')];
    all.forEach(el => { el.style.animation = 'none'; });
    void animEls[0]?.offsetWidth;
    all.forEach(el => { el.style.animation = ''; });
  }

  let wasHidden = false;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) {
        wasHidden = true;
      } else if (wasHidden) {
        wasHidden = false;
        replayAnimations();
      }
    });
  }, { threshold: 0.4 });

  io.observe(hero);
}

// ── Scroll Reveal ────────────────────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.nd-reveal');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('nd-revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  els.forEach(el => io.observe(el));
}

// ── Lazy Video ───────────────────────────────────────────────────────────────
function initLazyVideos() {
  const lazyVideos = [...document.querySelectorAll('video')].filter(v =>
    v.querySelector('source[data-src]')
  );
  if (!lazyVideos.length) return;

  function loadAll() {
    lazyVideos.forEach(video => {
      video.querySelectorAll('source[data-src]').forEach(s => {
        s.src = s.dataset.src;
      });
      video.load();
    });
  }

  // Start downloading once page resources (images, fonts) are done
  if (document.readyState === 'complete') {
    loadAll();
  } else {
    window.addEventListener('load', loadAll, { once: true });
  }
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  splitIntoLetters();
  initHeroAnimation();
  initScrollReveal();
  initLazyVideos();
});
