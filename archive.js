/* ============================================================
   ARCHIVE — experimental ideas and work that never made it out.

   Everything about this page is driven by ITEMS below. To swap in
   a new set, replace the array; the numbering, the scatter and the
   viewer all follow from it. Nothing else needs touching.

   `src`  the image (already compressed, 100-400KB, max 1800px)
   `alt`  what it is, for screen readers — never left blank
   ============================================================ */
(function () {
  const ITEMS = [
    { src: 'aber-desktop.jpg', alt: 'ABER — identity study, unused' },
    { src: 'blank-13.jpg',     alt: 'BLANK — editorial spread, alternate direction' },
    { src: 'blank-14.jpg',     alt: 'BLANK — cover study, unused' },
    { src: 'unc-05.jpg',       alt: '[UN]CENSORED Health — layout study, unused' },
    { src: 'gd-01.jpg',        alt: 'good days — early interface exploration' },
    { src: 'blank-12.jpg',     alt: 'BLANK — type composition, alternate direction' },
    { src: 'owa-04.jpg',       alt: 'OWA — stationery study, unused' },
    { src: 'gd-02.jpg',        alt: 'good days — icon exploration' },
    { src: 'madrun-09.jpg',    alt: 'MADRUN — packaging study, unused' },
    { src: 'blank-11.jpg',     alt: 'BLANK — page study, alternate direction' },
    { src: 'mm-03.jpg',        alt: 'Mira Mar — collateral study, unused' },
    { src: 'owa-08.jpg',       alt: 'OWA — signage study, unused' },
    { src: 'gd-03.jpg',        alt: 'good days — icon exploration' },
    { src: 'owa-02.jpg',       alt: 'OWA — mark exploration' },
    { src: 'blank-10.jpg',     alt: 'BLANK — detail, unused' }
  ];

  // Placement on a 12-column grid. The pattern cycles, so adding items
  // never means working out new coordinates — c = start column,
  // s = span, t = how far the tile drops, in vw, to break the rows up.
  const PLACE = [
    { c: 1,  s: 5, t: 0   },
    { c: 8,  s: 4, t: 7   },
    { c: 3,  s: 4, t: 2.5 },
    { c: 9,  s: 3, t: 10  },
    { c: 1,  s: 3, t: 3.5 },
    { c: 6,  s: 5, t: 0   },
    { c: 2,  s: 4, t: 8   },
    { c: 8,  s: 4, t: 1.5 }
  ];

  const grid = document.querySelector('.ar-grid');
  if (!grid) return;

  const pad = n => String(n).padStart(3, '0');

  grid.innerHTML = ITEMS.map(function (it, i) {
    const p = PLACE[i % PLACE.length];
    return '<button class="ar-tile reveal" type="button" data-i="' + i + '"'
      + ' style="--c:' + p.c + ';--s:' + p.s + ';--t:' + p.t + 'vw">'
      +   '<span class="ar-num">' + pad(i + 1) + '</span>'
      +   '<img src="' + it.src + '" alt="' + it.alt.replace(/"/g, '&quot;') + '" loading="lazy">'
      + '</button>';
  }).join('');

  /* ---------- viewer ---------- */
  const view  = document.querySelector('.ar-view');
  const vImg  = view.querySelector('.ar-img');
  const vNum  = view.querySelector('.ar-count');
  const vCap  = view.querySelector('.ar-cap');
  let at = 0;
  let lastFocus = null;

  // keep the neighbours warm so prev/next never shows an empty frame
  function preload(i) {
    [i - 1, i + 1].forEach(function (n) {
      const it = ITEMS[(n + ITEMS.length) % ITEMS.length];
      if (it) { const im = new Image(); im.src = it.src; }
    });
  }

  function paint(i) {
    at = (i + ITEMS.length) % ITEMS.length;
    const it = ITEMS[at];
    vImg.src = it.src;
    vImg.alt = it.alt;
    vCap.textContent = it.alt;
    vNum.textContent = pad(at + 1) + ' / ' + pad(ITEMS.length);
    preload(at);
  }

  function open(i) {
    lastFocus = document.activeElement;
    paint(i);
    view.hidden = false;
    document.body.classList.add('ar-locked');
    view.querySelector('.ar-close').focus();
  }

  function close() {
    view.hidden = true;
    document.body.classList.remove('ar-locked');
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener('click', function (e) {
    const t = e.target.closest('.ar-tile');
    if (t) open(Number(t.dataset.i));
  });

  view.addEventListener('click', function (e) {
    if (e.target.closest('.ar-prev'))  return paint(at - 1);
    if (e.target.closest('.ar-next'))  return paint(at + 1);
    if (e.target.closest('.ar-close')) return close();
    // the ground behind the image closes too; the image itself does not
    if (!e.target.closest('.ar-stage') || e.target.classList.contains('ar-stage')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (view.hidden) return;
    if (e.key === 'Escape')     { e.preventDefault(); close(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); paint(at - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); paint(at + 1); }
  });

  // reveal-on-scroll, same as the rest of the site
  const io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .08 });
  grid.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
