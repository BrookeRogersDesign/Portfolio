/* ============================================================
   ARCHIVE — experimental ideas and work that never made it out.

   A uniform wall: every piece is cover-cropped to the same square tile
   and numbered beneath it, so the grid reads as one set rather than a
   row of mismatched sizes. Clicking a tile opens the piece full screen,
   whole and uncropped, with prev / close / next.

   `src`  the image (already compressed, cut at native size)
   `fit`  optional, 'contain'. A square crop slices a wide logotype
          mid-word, which reads as a mistake rather than a crop — these
          sit whole inside the tile instead.
   `pad`  optional, a percentage inset. Takes one piece down further
          inside its square — line art reads much bigger than a dense
          image filling the same tile.
   `alt`  what it is, for screen readers — never left blank

   To add a piece: drop it in ITEMS. Numbering follows automatically.
   ============================================================ */
(function () {
  const ITEMS = [
    { src: 'ar-01.jpg', alt: 'Sunburst crest on burgundy — unused' },
    { src: 'ar-02.jpg', alt: 'Stacked mark over water — unused' },
    { src: 'ar-03.jpg', fit: 'contain', alt: 'ACIC — bold, precise, confident, uplifting, unified — unused direction' },
    { src: 'ar-04.jpg', fit: 'contain', alt: '201 Central Ave Bar, St. Pete — unused' },
    { src: 'ar-05.jpg', alt: 'St. Pete Bar, Central Ave — unused' },
    { src: 'ar-06.jpg', fit: 'contain', pad: '20%', alt: 'MM monogram — unused' },
    { src: 'ar-07.jpg', alt: 'Mira Mar envelope — unused' },
    { src: 'ar-08.jpg', alt: 'Linked mark on bronze — unused' },
    { src: 'ar-09.jpg', fit: 'contain', pad: '20%', alt: 'Runner and dog illustration — unused' },
    { src: 'ar-10.jpg', alt: 'Mark on sage — unused' },
    { src: 'ar-15.jpg', alt: 'Massage Therapy, est 2021 — unused' },
    { src: 'ar-11.jpg', alt: 'Interiors logotype and social mockup — unused' },
    { src: 'ar-12.jpg', alt: 'ANNEX — functional movement, more than just fitness — unused concept' },
    { src: 'ar-13.jpg', alt: '310 Harrison — app screens, unused concept' },
    { src: 'ar-14.jpg', fit: 'contain', pad: '20%', alt: 'AirPlayne logo — unused' }
  ];

  const grid = document.querySelector('.ar-grid');
  const view = document.querySelector('.ar-view');
  if (!grid) return;

  const pad = function (n) { return String(n).padStart(3, '0'); };
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  if (!ITEMS.length) {
    // no .reveal here: the early return below skips the observer that would
    // add .in, and the message would sit at opacity 0
    grid.innerHTML = '<p class="ar-empty">Being put together — back shortly.</p>';
    grid.classList.add('is-empty');
    return;
  }

  grid.innerHTML = ITEMS.map(function (it, i) {
    return '<button class="ar-tile reveal" type="button" data-i="' + i + '"'
      +     ' aria-label="Open ' + esc(it.alt) + '">'
      +   '<span class="ar-thumb' + (it.fit === 'contain' ? ' is-whole' : '') + '"'
      +     (it.pad ? ' style="--pad:' + it.pad + '"' : '') + '>'
      +     '<img src="' + it.src + '" alt="' + esc(it.alt) + '" loading="lazy">'
      +   '</span>'
      +   '<span class="ar-num">' + pad(i + 1) + '</span>'
      + '</button>';
  }).join('');

  /* ---------- full-screen viewer ---------- */
  if (view) {
    const vImg = view.querySelector('.ar-img');
    const vNum = view.querySelector('.ar-count');
    const vCap = view.querySelector('.ar-cap');
    let at = 0;
    let lastFocus = null;

    // keep the neighbours warm so prev/next never flashes an empty frame
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
      if (vCap) vCap.textContent = it.alt;
      if (vNum) vNum.textContent = pad(at + 1) + ' / ' + pad(ITEMS.length);
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
      if (e.target.closest('.ar-prev'))  { paint(at - 1); return; }
      if (e.target.closest('.ar-next'))  { paint(at + 1); return; }
      if (e.target.closest('.ar-close')) { close(); return; }
      // the ground around the image closes too; the image itself does not
      if (!e.target.closest('.ar-img')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (view.hidden) return;
      if (e.key === 'Escape')     { e.preventDefault(); close(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); paint(at - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); paint(at + 1); }
    });
  }

  // reveal-on-scroll, same as the rest of the site
  const io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .08 });
  grid.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
