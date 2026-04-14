/* ══════════════════════════════════════════════════
   SECOND NATURE — Main Script
══════════════════════════════════════════════════ */
'use strict';

// ── Cases Data ──────────────────────────────────────────────────────────────
const CASES = [
  {
    id:'01', file:'Case 01 · The Implicated',
    en:{ title:'The Implicated', narrative:'A conspiracy larger than she imagined. The shirt was white. Everything else was not.', item:'Oversized white cotton shirt, asymmetric hem, adjustable waist tie, split cuffs.' },
    zh:{ title:'身陷其中', narrative:'一場比她想像更大的陰謀\n襯衫是白的，其他一切都不是', item:'寬版白色純棉襯衫，不對稱下擺，可調節腰帶，開衩袖口' },
    hotspots:[{ x:60,y:82,en:'Asymmetric hem',zh:'不對稱下擺'}]
  },
  {
    id:'02', file:'Case 02 · The Withheld',
    en:{ title:'The Withheld', narrative:'She said nothing. Waiting itself was a clue.', item:'Deep navy jacket with bold red standing collar, contrast lining, zip closure.' },
    zh:{ title:'緘口不言', narrative:'她什麼都沒說。等待本身，就是一條線索', item:'深海軍藍外套，鮮紅撞色立領，對比內裡，拉鍊開合' },
    hotspots:[{ x:57,y:72,en:'Red standing collar',zh:'紅色立領'}]
  },
  {
    id:'03', file:'Case 03 · The Bound',
    en:{ title:'The Doorless', narrative:"This key was never meant for a door.", item:'Deep navy wool turtleneck long coat, structured standing collar, double-faced fabric, concealed double buttons, sharp tailoring.' },
    zh:{ title:'無門之鑰', narrative:'這把鑰匙，不屬於任何一道門', item:'深海軍藍羊毛高領長大衣，結構立領，雙面布料，隱藏式雙排扣，俐落剪裁' },
    hotspots:[{ x:28,y:60,en:'Double-faced fabric',zh:'雙面布料'}]
  },
  {
    id:'04', file:'Case 04 · The Concealed',
    en:{ title:'The Concealed', narrative:'Brim pulled low, she pretended not to notice. Beneath the brim, she chose not to say.', item:'Wide-brim wool felt fedora, shapeable crown, dark brown grosgrain band, satin interior lining.' },
    zh:{ title:'藏而不露', narrative:'帽簷壓低，她假裝沒看見\n帽簷之下，她選擇不說', item:'寬簷紳士帽，可塑型帽冠，深棕羅緞帽帶，緞面內裡' },
    hotspots:[{ x:53,y:20,en:'Wide brim',zh:'寬帽簷'}]
  },
  {
    id:'05', file:'Case 05 · The Unacknowledged',
    en:{ title:'The Unspoken', narrative:'What the mirror held, the coat covered. Some things are not meant to be confirmed.', item:'Vintage camel oversized lapel trench coat, concealed double buttons, detachable waist belt, heavy wool.' },
    zh:{ title:'心照不宣', narrative:'鏡子裡裝著的，大衣替她蓋住了\n有些事，不需要被證實', item:'復古駝色寬大翻領風衣，隱藏式雙排扣，可拆卸腰帶，厚磅羊毛' },
    hotspots:[{ x:49,y:68,en:'Oversized lapel',zh:'寬大翻領'}]
  },
  {
    id:'06', file:'Case 06 · The Shielded',
    en:{ title:'The Shielded', narrative:'She kept them on. Some things are safer seen from behind glass.', item:'Round metal thin-frame sunglasses, brown polarized lenses, spring hinges, vintage rose gold frame.' },
    zh:{ title:'隔而觀之', narrative:'她沒有摘下眼鏡\n有些事，在鏡面之後看更安全', item:'圓形金屬細框太陽眼鏡，棕色偏光鏡片，彈簧鉸鏈，復古玫瑰金鏡架' },
    hotspots:[{ x:65,y:40,en:'Spring hinges',zh:'彈簧鉸鏈'}]
  },
  {
    id:'07', file:'Case 07 · The Exposed',
    en:{ title:'The Unfazed', narrative:'The hardest people to read always sit the stillest.', item:'Sleeveless fitted dress, structured neckline, minimalist silhouette.' },
    zh:{ title:'若無其事', narrative:'最難看透的人，永遠坐得最穩', item:'修身無袖洋裝，俐落領口，極簡輪廓' },
    hotspots:[{ x:54,y:80,en:'Sleeveless fitted dress',zh:'修身無袖洋裝'}]
  },
  {
    id:'08', file:'Case 08 · The Passing',
    en:{ title:'The Passing', narrative:'She ran. The trees made way. The scarf read the wind before she did.', item:'Double-sided extra-long scarf, camel gradient plaid, fringe hem, wool blend.' },
    zh:{ title:'瞬息之間', narrative:'她跑了，樹林讓開了路\n圍巾比她更早讀懂了風', item:'雙面加長圍巾，駝色漸層格紋，流蘇下擺，羊毛混紡' },
    hotspots:[{ x:48,y:64,en:'Camel gradient',zh:'駝色漸層'}]
  },
  {
    id:'09', file:'Case 09 · The Certain',
    en:{ title:'The Certain', narrative:'Putting it on was a declaration. Everyone understood.', item:'Vivid yellow turtleneck chunky knit sweater, oversized drop shoulders, thick rib knit, pure wool.' },
    zh:{ title:'心意已決', narrative:'她穿上它是一個宣告，所有人都明白了', item:'鮮黃色高領粗針毛衣，落肩寬版剪裁，厚羅紋針織，純羊毛' },
    hotspots:[{ x:50,y:74,en:'Turtleneck',zh:'粗針織高領'}]
  },
  {
    id:'10', file:'Case 10 · The Fortified',
    en:{ title:'The Armored', narrative:'She put them on the way others pick up a weapon.', item:'Short black faux fur gloves, plush texture, fitted cut, elasticated cuffs, leather interior lining.' },
    zh:{ title:'蓄勢待發', narrative:'她戴上手套的方式，像別人拿起一件武器', item:'黑色短款仿皮草手套，絨感材質，貼合剪裁，鬆緊袖口，皮革內裡' },
    hotspots:[{ x:60,y:42,en:'Plush texture',zh:'絨感材質'}]
  },
  {
    id:'11', file:'Case 11 · The Ordinary',
    en:{ title:'The Ordinary', narrative:'Time here always moved a little slower than outside.', item:'Deep navy double-breasted windbreaker, standing collar, waist belt, classic lining, detachable design.' },
    zh:{ title:'見怪不怪', narrative:'這裡的時間總是比外面慢一點', item:'深海軍藍雙排扣風衣，立領，腰帶，經典內裡，可拆卸設計' },
    hotspots:[{ x:28,y:78,en:'Double-breasted',zh:'雙排扣設計'}]
  },
  {
    id:'12', file:'Case 12 · The Outrun',
    en:{ title:'The Outrun', narrative:"Some routes only work if no one knows. But she could already hear them behind her.", item:'Blue ribbed turtleneck knit top, slim fit, rib-knit trim, cotton-wool blend.' },
    zh:{ title:'步步進逼', narrative:'有些路線，只有在沒人知道的情況下才有效\n可惜她已經聽見它們在她身後了', item:'藍色羅紋高領針織上衣，修身剪裁，羅紋滾邊，棉羊毛混紡' },
    hotspots:[{ x:35,y:62,en:'Rib-knit collar',zh:'羅紋高領'}]
  },
  {
    id:'13', file:'Case 13 · The Searching',
    en:{ title:'The Searching', narrative:'She held the light out like a question.', item:'Off-white wool blend long coat, wide notch lapel, deep side pockets, detachable waist belt.' },
    zh:{ title:'持燈探路', narrative:'她舉著燈，像是一個問句', item:'米白色羊毛混紡長大衣，寬缺角翻領，深側口袋，可拆卸腰帶' },
    hotspots:[{ x:48,y:85,en:'Deep pockets',zh:'深側口袋'}]
  },
  {
    id:'14', file:'Case 14 · The Connected',
    en:{ title:'The Connected', narrative:'The call was from herself. A future version.', item:'Oversized black casual blazer, notch lapel, single button, relaxed silhouette, layered over white turtleneck.' },
    zh:{ title:'連線已通', narrative:'電話是她打來的，一個未來的她', item:'黑色寬版休閒西裝外套，缺角翻領，單扣，寬鬆版型，內搭白色高領' },
    hotspots:[{ x:53,y:80,en:'Notch lapel',zh:'缺角翻領'},]
  },
  {
    id:'15', file:'Case 15 · The Threshold',
    en:{ title:'The Threshold', narrative:'The light in her hands. The shadow at her back.\nShe stood between the two.', item:'Camel wool high standing collar coat, dramatic oversized lapels, concealed double buttons.' },
    zh:{ title:'懸而未決', narrative:'光在她手裡，影子在她身後\n她站在兩者之間', item:'駝色羊毛高立領大衣，誇張寬版翻領，隱藏雙排扣' },
    hotspots:[{ x:45,y:64,en:'Dramatic lapels',zh:'極寬版翻領'}]
  },
  {
    id:'16', file:'Case 16 · The Retrieved',
    en:{ title:'The Resolved', narrative:'All she needed was already there. Every case comes to an end.', item:'Deep forest green wool turtleneck long overcoat, enveloping standing collar, concealed double buttons, interior hidden pocket.' },
    zh:{ title:'塵埃落定', narrative:'需要的一切，早就在她手裡了\n事件終將落幕', item:'綠羊毛高領長大衣，包覆式立領，隱藏雙排扣，內藏口袋' },
    hotspots:[{ x:53,y:60,en:'Enveloping collar',zh:'包覆式立領'}]
  }
];

// ── State ────────────────────────────────────────────────────────────────────
let lang = 'en';
let currentPage = 'project'; // 'project' | 'making-of'
const vh              = window.innerHeight;
const REVEAL_PER_CASE = vh * 0.8;  // scroll distance for clip-path sweep
const DWELL_PER_CASE  = vh * 1.2;  // scroll distance fully visible before next case starts
const STEP_PER_CASE   = REVEAL_PER_CASE + DWELL_PER_CASE; // 2.0vh per case

// ── Easing ──────────────────────────────────────────────────────────────────
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// ── Build Cases DOM ─────────────────────────────────────────────────────────
function buildCases() {
  const container = document.getElementById('cases-container');

  CASES.forEach((c, i) => {
    const d = c[lang];
    const alt = c[lang === 'en' ? 'zh' : 'en'].title;

    const hotspotsHtml = c.hotspots.map((h, hi) =>
      `<div class="hotspot" style="left:${h.x}%;top:${h.y}%;" data-idx="${hi}">
        <div class="hs-dot"></div>
        <div class="hs-line"></div>
        <span class="hs-label">${h[lang]}</span>
      </div>`
    ).join('');

    const sec = document.createElement('section');
    // Even i → panel right; odd i → panel left
    const panelSide = i % 2 === 0 ? 'panel-right-case' : 'panel-left-case';
    sec.className = 'case ' + panelSide; // 'revealed' added by scroll handler
    sec.id = `case-${c.id}`;
    sec.dataset.caseId = c.id;
    sec.style.zIndex = i + 1;
    // Case 01 fades in from 50% opacity (no black-bar sweep); others use clip-path
    if (i === 0) {
      sec.style.clipPath = 'none';
      sec.style.opacity  = '0.5';
    } else {
      sec.style.clipPath = 'inset(0 100% 0 0)';
    }

    sec.innerHTML = `
      <div class="case-img-wrap">
        <div class="case-img-frame">
          <img src="assets/images/cases/${c.file}.jpg" alt="Case ${c.id}" ${i > 2 ? 'loading="lazy"' : ''}>
          ${hotspotsHtml}
        </div>
      </div>
      <div class="case-panel ${i % 2 === 0 ? 'panel-right' : 'panel-left'}">
        <div class="case-id-row">
          <span class="case-id">Case ${c.id}</span>
          <div class="case-id-rule"></div>
        </div>
        <div class="redact-stack">
          <div class="redact-block redact-title">
            <h2 class="case-title-en">${d.title}</h2>
            <p class="case-title-zh" style="display:${lang === 'zh' ? 'block' : 'none'}">${alt}</p>
          </div>
          <div class="redact-block">
            <p class="rb-body">${d.narrative}</p>
          </div>
          <div class="redact-block rb-item-block"><span class="rb-label" data-en="The Item" data-zh="單品說明">The Item</span><span class="rb-sep"> | </span><span class="rb-item">${d.item}</span></div>
        </div>
      </div>
      <div class="case-next-cue">
        ${i < CASES.length - 1 ? '<span class="cnc-arrow"></span>' : ''}
        <span class="cnc-text" data-en="${i < CASES.length - 1 ? 'Next Case' : 'Case closed'}" data-zh="${i < CASES.length - 1 ? '下一場景' : '結案'}">${i < CASES.length - 1 ? 'Next Case' : 'Case closed'}</span>
      </div>
    `;
    container.appendChild(sec);
  });

  // Spacer: tall enough so casesScroll can reach the last case's dwell end.
  // casesScroll max = (CASES.length - 1)*vh + spacerHeight
  // Need: casesScroll max >= CASES.length * STEP_PER_CASE
  // spacerHeight >= CASES.length * STEP_PER_CASE - (CASES.length - 1) * vh + vh (breathing room)
  const minSpacer = CASES.length * STEP_PER_CASE
                  - (CASES.length - 1) * vh
                  + vh; // breathing room
  const spacer = document.createElement('div');
  spacer.className = 'cases-spacer';
  spacer.style.height = Math.max(vh * 2, minSpacer) + 'px';
  container.appendChild(spacer);
}

// ── Language ─────────────────────────────────────────────────────────────────
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.dataset.lang;
      if (l === lang) return;
      lang = l;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
      applyLang();
    });
  });
}

function applyLang() {
  // Static data-en/zh elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.zh;
  });

  // Hero suffix line (only shown in ZH)
  const suffix = document.querySelector('.h-redact-suffix');
  if (suffix) suffix.classList.toggle('zh-active', lang === 'zh');

  // Case content
  document.querySelectorAll('.case').forEach(caseEl => {
    const c = CASES.find(x => x.id === caseEl.dataset.caseId);
    if (!c) return;
    const d = c[lang];
    caseEl.querySelector('.case-title-en').textContent = d.title;
    caseEl.querySelector('.rb-body').textContent = d.narrative;
    caseEl.querySelector('.rb-item').textContent = d.item;
    caseEl.querySelectorAll('.hs-label').forEach((lbl, i) => {
      if (c.hotspots[i]) lbl.textContent = c.hotspots[i][lang];
    });
  });

  // Re-trigger Redacted Reveal for already-revealed cases
  document.querySelectorAll('.case.revealed').forEach(caseEl => {
    caseEl.classList.add('redact-reset');
    caseEl.classList.remove('revealed');
    void caseEl.offsetWidth; // force reflow
    caseEl.classList.remove('redact-reset');
    caseEl.classList.add('revealed');
  });
}

// ── Scroll-controlled Video ──────────────────────────────────────────────────
function initVideoScroll() {
  const video = document.getElementById('hero-video');
  const introZone = document.getElementById('intro-zone');
  if (!video || !introZone) return;
  video.pause();

  let ticking = false;
  function update() {
    if (!video.duration) return;
    if (currentPage !== 'project') { ticking = false; return; }
    const p = Math.max(0, Math.min(1, window.scrollY / introZone.offsetHeight));
    const t = p * video.duration;
    if (Math.abs(video.currentTime - t) > 0.04) video.currentTime = t;
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  video.addEventListener('loadedmetadata', update);
}

// ── Sticky Cases Scroll Handler ──────────────────────────────────────────────
function initCasesScroll() {
  const container  = document.getElementById('cases-container');
  const progressEl = document.getElementById('case-progress');
  const fill       = document.getElementById('cp-fill');
  const label      = document.getElementById('cp-label');
  const total      = CASES.length;
  let   prevIdx    = -1;
  let   ticking    = false;

  function update() {
    if (!container) return;
    if (currentPage !== 'project') { ticking = false; return; }
    const rect        = container.getBoundingClientRect();
    const casesScroll = Math.max(0, -rect.top);

    const footerEl = document.getElementById('footer');
    const atFooter  = footerEl && footerEl.getBoundingClientRect().top < window.innerHeight * 0.85;
    const inRange   = rect.top <= 0 && rect.bottom > window.innerHeight * 0.25 && !atFooter;
    if (progressEl) progressEl.classList.toggle('vis', inRange);
    if (rect.top > 0) { ticking = false; return; }

    CASES.forEach((c, i) => {
      const caseEl = document.getElementById(`case-${c.id}`);
      if (!caseEl) return;
      // revealStart: when this case's animation begins
      const revealStart = i * STEP_PER_CASE;
      // raw: 0 = not started, 1 = fully revealed (dwell begins)
      const raw = (casesScroll - revealStart) / REVEAL_PER_CASE;

      if (i === 0) {
        // Case 01: starts at 50% opacity, quickly reaches full
        if (raw <= 0) {
          caseEl.style.opacity = '0.5';
        } else if (raw >= 1) {
          caseEl.style.opacity = '1';
          if (!caseEl.classList.contains('revealed'))  caseEl.classList.add('revealed');
          if (!caseEl.classList.contains('case-done')) caseEl.classList.add('case-done');
        } else {
          // Map raw 0→1 to opacity 0.5→1
          caseEl.style.opacity = (0.5 + easeOutCubic(raw) * 0.5).toFixed(3);
          if (raw > 0.35 && !caseEl.classList.contains('revealed')) {
            caseEl.classList.add('revealed');
          }
        }
      } else {
        // All other cases: clip-path sweep left → right
        if (raw <= 0) {
          caseEl.style.clipPath = 'inset(0 100% 0 0)';
        } else if (raw >= 1) {
          caseEl.style.clipPath = 'inset(0 0% 0 0)';
          if (!caseEl.classList.contains('revealed'))  caseEl.classList.add('revealed');
          if (!caseEl.classList.contains('case-done')) caseEl.classList.add('case-done');
        } else {
          const clipped = (1 - easeOutCubic(raw)) * 100;
          caseEl.style.clipPath = `inset(0 ${clipped.toFixed(2)}% 0 0)`;
          if (raw > 0.35 && !caseEl.classList.contains('revealed')) {
            caseEl.classList.add('revealed');
          }
        }
      }
    });

    const idx = Math.max(0, Math.min(total - 1, Math.floor(casesScroll / STEP_PER_CASE)));
    if (idx !== prevIdx) {
      prevIdx = idx;
      if (fill)  fill.style.width  = `${((idx + 1) / total) * 100}%`;
      if (label) label.textContent = `${String(idx + 1).padStart(2, '0')} / ${total}`;
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  requestAnimationFrame(() => requestAnimationFrame(update));
}

// ── Narrative Redacted Reveal ────────────────────────────────────────────────
function initNarrativeReveal() {
  const narrative = document.getElementById('narrative');
  const cueFixed  = document.getElementById('n-cue-fixed');
  const introZone = document.getElementById('intro-zone');
  if (!narrative) return;

  // Text lines reveal via IntersectionObserver
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        narrative.classList.add('unredacting');
        io.unobserve(narrative);
      }
    });
  }, { threshold: 0.3 });
  io.observe(narrative);

  // Fixed cue: appears when user has scrolled into the narrative area (scroll-driven)
  // Hides when user scrolls into cases section
  if (cueFixed) {
    const casesCont = document.getElementById('cases-container');
    const hideAt = casesCont
      ? casesCont.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.05
      : Infinity;

    let scrollReady = false;

    function updateCue() {
      // Trigger once user has scrolled at least 40% of viewport height
      if (!scrollReady && window.scrollY > window.innerHeight * 0.4) {
        scrollReady = true;
      }
      cueFixed.classList.toggle('vis', scrollReady && window.scrollY < hideAt);
    }

    window.addEventListener('scroll', updateCue, { passive: true });
  }
}

// ── Footer Reveal ────────────────────────────────────────────────────────────
function initFooterReveal() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      // Lines: staggered 0 → 240ms
      footer.querySelectorAll('.f-line').forEach((l, i) =>
        setTimeout(() => l.classList.add('vis'), i * 240));
      // Brand block: rule → name → sub
      const rule = footer.querySelector('.footer-rule');
      const name = footer.querySelector('.footer-name');
      const sub  = footer.querySelector('.footer-sub');
      setTimeout(() => { if (rule) rule.classList.add('vis'); }, 500);
      setTimeout(() => { if (name) name.classList.add('vis'); }, 650);
      setTimeout(() => { if (sub)  sub.classList.add('vis');  }, 800);
      io.unobserve(footer);
    });
  }, { threshold: 0.2 });
  io.observe(footer);
}

// ── Hotspot Toggle ────────────────────────────────────────────────────────────
function initHotspots() {
  document.addEventListener('click', e => {
    const hs = e.target.closest('.hotspot');
    if (hs) hs.classList.toggle('collapsed');
  });
}

// ── Making Of Scroll Reveal ──────────────────────────────────────────────────
function initMakingOfReveal() {
  const els = document.querySelectorAll('#page-making-of .mo-part, #page-making-of .mo-closing');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('mo-revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => {
    if (!el.classList.contains('mo-revealed')) io.observe(el);
  });
}

// ── Page Routing ─────────────────────────────────────────────────────────────
function initPageRouting() {
  const curtain = document.getElementById('page-curtain');
  const tabs    = document.querySelectorAll('.page-tab');
  const pageProject  = document.getElementById('page-project');
  const pageMakingOf = document.getElementById('page-making-of');

  function activatePage(page) {
    currentPage = page;
    const isProject = page === 'project';
    pageProject.classList.toggle('page-active', isProject);
    pageMakingOf.classList.toggle('page-active', !isProject);
    tabs.forEach(t => t.classList.toggle('active', t.dataset.page === page));
    // Signal current page on <html> so CSS can style fixed overlays accordingly
    document.documentElement.dataset.currentPage = page;
    // Update hash without triggering hashchange loop
    const target = isProject ? '#/project' : '#/making-of';
    if (location.hash !== target) {
      history.replaceState(null, '', target);
    }
  }

  function navigateTo(page) {
    if (page === currentPage) return;
    // Curtain colour matches the destination background for a smooth cross-fade
    curtain.style.background = page === 'making-of' ? '#f2ede4' : '#080808';
    curtain.classList.add('vis');
    setTimeout(() => {
      activatePage(page);
      window.scrollTo(0, 0);
      if (page === 'making-of') requestAnimationFrame(initMakingOfReveal);
      // Short delay so scroll finishes before fade-out
      setTimeout(() => curtain.classList.remove('vis'), 40);
    }, 350);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(tab.dataset.page);
    });
  });

  window.addEventListener('hashchange', () => {
    const page = location.hash === '#/making-of' ? 'making-of' : 'project';
    navigateTo(page);
  });

  // Init from URL hash
  const initPage = location.hash === '#/making-of' ? 'making-of' : 'project';
  activatePage(initPage);
  if (initPage === 'making-of') requestAnimationFrame(initMakingOfReveal);
}

// ── Init ──────────────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('btt-visible');
    } else {
      btn.classList.remove('btt-visible');
    }
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Custom Cursor ─────────────────────────────────────────────────────────────
function initCursor() {
  // Only on mouse devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'c-dot';
  ring.className = 'c-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -100, my = -100; // actual mouse position
  let rx = -100, ry = -100; // ring's lerped position
  const LERP = 0.13;        // lag factor (lower = more lag)

  // Move dot instantly on every mousemove
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  }, { passive: true });

  // Show on entry, hide when leaving the window
  document.addEventListener('mouseenter', () => {
    dot.classList.add('c-vis');
    ring.classList.add('c-vis');
  });
  document.addEventListener('mouseleave', () => {
    dot.classList.remove('c-vis');
    ring.classList.remove('c-vis');
  });

  // Ring follows with lag via rAF
  function tick() {
    rx += (mx - rx) * LERP;
    ry += (my - ry) * LERP;
    ring.style.transform = `translate(${rx.toFixed(2)}px,${ry.toFixed(2)}px)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
  buildCases();
  initLang();
  initPageRouting();
  initBackToTop();
  initVideoScroll();
  initCasesScroll();
  initNarrativeReveal();
  initFooterReveal();
  initHotspots();
  initCursor();
});
