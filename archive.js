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
    { src: 'ar-01.jpg', w: 672, alt: 'Sunburst crest on burgundy \u2014 unused' },
    { src: 'ar-02.jpg', w: 553, alt: 'Stacked mark over water \u2014 unused' },
    { src: 'ar-03.jpg', w: 1092, alt: 'ACIC \u2014 bold, precise, confident, uplifting, unified \u2014 unused direction' },
    { src: 'ar-04.jpg', w: 782, alt: '201 Central Ave Bar, St. Pete \u2014 unused' },
    { src: 'ar-05.jpg', w: 676, alt: 'St. Pete Bar, Central Ave \u2014 unused' },
    { src: 'ar-06.jpg', w: 245, alt: 'MM monogram \u2014 unused' },
    { src: 'ar-07.jpg', w: 791, alt: 'Mira Mar envelope \u2014 unused' },
    { src: 'ar-08.jpg', w: 544, alt: 'Linked mark on bronze \u2014 unused' },
    { src: 'ar-09.jpg', w: 451, alt: 'Runner and dog illustration \u2014 unused' }
  ];

  // Placement on a 12-column grid. The pattern cycles, so adding items
  // never means working out new coordinates — c = start column,
  // s = span, t = how far the tile drops, in vw, to break the rows up.
  // Spans trimmed a step from the original layout: Brooke wants these sitting
  // slightly under their intended size, and nothing is ever upscaled — each
  // tile is also capped at its own natural width further down.
  const PLACE = [
    { c: 1,  s: 4, t: 0   },
    { c: 8,  s: 3, t: 7   },
    { c: 3,  s: 4, t: 2.5 },
    { c: 9,  s: 3, t: 10  },
    { c: 1,  s: 3, t: 3.5 },
    { c: 6,  s: 4, t: 0   },
    { c: 2,  s: 3, t: 8   },
    { c: 8,  s: 4, t: 1.5 }
  ];

  // how close to full size a piece may render
  const SCALE = 0.88;

  const grid = document.querySelector('.ar-grid');
  if (!grid) return;

  const pad = n => String(n).padStart(3, '0');

  if (!ITEMS.length) {
    // no .reveal here: the early return below skips the observer that would
    // add .in, and the message would sit at opacity 0
    grid.innerHTML = '<p class="ar-empty">Being put together \u2014 back shortly.</p>';
    grid.classList.add('is-empty');
    return;
  }

  grid.innerHTML = ITEMS.map(function (it, i) {
    const p = PLACE[i % PLACE.length];
    // never render a piece larger than its source, and sit a touch under it
    var cap = it.w ? ';max-width:' + Math.round(it.w * SCALE) + 'px' : '';
    return '<button class="ar-tile reveal" type="button" data-i="' + i + '"'
      + ' style="--c:' + p.c + ';--s:' + p.s + ';--t:' + p.t + 'vw' + cap + '">'
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
