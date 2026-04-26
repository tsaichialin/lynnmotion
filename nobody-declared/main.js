'use strict';

// ── Back to top ──────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  let bttVisible = false;
  window.addEventListener('scroll', () => {
    const shouldShow = window.scrollY > 400;
    if (shouldShow !== bttVisible) {
      bttVisible = shouldShow;
      btn.classList.toggle('btt-visible', shouldShow);
    }
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

// ── Hero animation — inject keyframes matching Nobody Declared Standalone ────
function injectHeroAnimation() {
  const DUR = 4.3, OFFSET = 7, ANGLE = 44;
  const CYAN = '#11dcfc', MAG = '#ff3ea5', BLEND = 'color-dodge';
  const SPREAD = 1, STAGGER = 0.5;
  const easeCss = 'cubic-bezier(0.42,0,0.58,1)';

  const rad  = (ANGLE * Math.PI) / 180;
  const dx   = +(Math.cos(rad) * OFFSET).toFixed(2);
  const dy   = +(Math.sin(rad) * OFFSET).toFixed(2);
  const micro = OFFSET * SPREAD * 0.25;
  const vary  = (i, s) => s * Math.sin(i * 2.39996);

  let css = `
    .nd-txt-c { color:${CYAN}; mix-blend-mode:${BLEND}; animation:nd-blk-c ${DUR}s ${easeCss} infinite; }
    .nd-txt-m { color:${MAG};  mix-blend-mode:${BLEND}; animation:nd-blk-m ${DUR}s ${easeCss} infinite; }
    @keyframes nd-blk-c {
      0%,15% { transform:translate(${-dx}px,${-dy}px); }
      50%,78% { transform:translate(0,0); }
      100%    { transform:translate(${-dx}px,${-dy}px); }
    }
    @keyframes nd-blk-m {
      0%,15% { transform:translate(${dx}px,${dy}px); }
      50%,78% { transform:translate(0,0); }
      100%    { transform:translate(${dx}px,${dy}px); }
    }
  `;

  for (let i = 0; i < 14; i++) {
    const mx    = +(vary(i,   micro)).toFixed(2);
    const my    = +(vary(i+3, micro * 0.6)).toFixed(2);
    const delay = -Math.abs(+(vary(i, DUR * STAGGER)).toFixed(3));
    const spd   = +(DUR * (1 + vary(i, 0.12))).toFixed(2);
    css += `
      @keyframes nd-gl-${i} {
        0%   { transform:translate(${mx}px,${my}px); }
        50%  { transform:translate(${+(-mx*0.5).toFixed(2)}px,${+(-my*0.5).toFixed(2)}px); }
        100% { transform:translate(${mx}px,${my}px); }
      }
      .nd-txt-layer .gl-${i} { animation:nd-gl-${i} ${spd}s ease-in-out ${delay}s infinite; }
    `;
  }

  const st = document.createElement('style');
  st.id = '__nd-hero-anim';
  document.head.appendChild(st);
  st.textContent = css;
}

// ── Hero animation replay on re-entry ────────────────────────────────────────
function initHeroAnimation() {
  const hero = document.querySelector('.nd-hero');
  if (!hero) return;

  function replayAnimations() {
    const layers = hero.querySelectorAll('.nd-txt-layer');
    layers.forEach(l => {
      l.style.animation = 'none';
      l.querySelectorAll('.gl').forEach(g => { g.style.animation = 'none'; });
    });
    void hero.querySelector('.nd-txt-layer')?.offsetWidth;
    layers.forEach(l => {
      l.style.animation = '';
      l.querySelectorAll('.gl').forEach(g => { g.style.animation = ''; });
    });
  }

  let wasHidden = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) wasHidden = true;
      else if (wasHidden) { wasHidden = false; replayAnimations(); }
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
// Motion Poster videos use preload="auto" and play immediately on load.
// Concept Short Film uses data-src + preload="none"; it starts downloading
// after window.load (images, fonts done) so it doesn't compete with the
// top two autoplay videos during initial page load.
function initLazyVideos() {
  const lazyVideos = Array.from(document.querySelectorAll('video')).filter(v =>
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

  if (document.readyState === 'complete') {
    loadAll();
  } else {
    window.addEventListener('load', loadAll, { once: true });
  }
}

// ── Match poster image heights ────────────────────────────────────────────────
function matchPosterHeight() {
  const row = document.querySelector('.nd-poster-imgs');
  if (!row) return;
  const leftFig  = row.querySelector('.nd-fig:first-child');
  const rightFig = row.querySelector('.nd-fig:last-child');
  const rightImg = rightFig?.querySelector('img');
  if (!leftFig || !rightImg) return;

  function sync() {
    const h = rightFig.getBoundingClientRect().height;
    if (h > 0) leftFig.style.height = h + 'px';
  }

  function trySync() {
    if (rightImg.naturalHeight > 0) requestAnimationFrame(sync);
  }

  // Try immediately (cached), otherwise wait for image load or full page load
  if (rightImg.complete && rightImg.naturalHeight > 0) {
    requestAnimationFrame(sync);
  } else {
    rightImg.addEventListener('load', trySync, { once: true });
    window.addEventListener('load', trySync, { once: true });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    leftFig.style.height = '';
    resizeTimer = setTimeout(sync, 80);
  }, { passive: true });
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  injectHeroAnimation();
  initHeroAnimation();
  initScrollReveal();
  initLazyVideos();
  matchPosterHeight();
});
