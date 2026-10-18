/* ============================================================
   ARCHIVE — experimental ideas and work that never made it out.

   A plain gallery: a scattered wall of pieces on white. No numbering,
   nothing to click. Everything is driven by ITEMS below — replace the
   array and the scatter follows. Nothing else needs touching.

   `src`  the image (already compressed, cut at native size)
   `w`    its natural width in px, so a tile can never render larger
          than the piece was drawn
   `alt`  what it is, for screen readers — never left blank
   ============================================================ */
(function () {
  const ITEMS = [
    { src: 'ar-01.jpg', w: 672,  alt: 'Sunburst crest on burgundy — unused' },
    { src: 'ar-02.jpg', w: 553,  alt: 'Stacked mark over water — unused' },
    { src: 'ar-03.jpg', w: 1092, alt: 'ACIC — bold, precise, confident, uplifting, unified — unused direction' },
    { src: 'ar-04.jpg', w: 782,  alt: '201 Central Ave Bar, St. Pete — unused' },
    { src: 'ar-05.jpg', w: 676,  alt: 'St. Pete Bar, Central Ave — unused' },
    { src: 'ar-06.jpg', w: 245,  alt: 'MM monogram — unused' },
    { src: 'ar-07.jpg', w: 791,  alt: 'Mira Mar envelope — unused' },
    { src: 'ar-08.jpg', w: 544,  alt: 'Linked mark on bronze — unused' },
    { src: 'ar-09.jpg', w: 451,  alt: 'Runner and dog illustration — unused' }
  ];

  // how close to full size a piece may render — never above 1
  const SCALE = 0.88;

  // Placement on a 12-column grid. The pattern cycles, so adding items
  // never means working out new coordinates — c = start column,
  // s = span, t = how far the tile drops, in vw, to break the rows up.
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

  const grid = document.querySelector('.ar-grid');
  if (!grid) return;

  if (!ITEMS.length) {
    // no .reveal here: the early return below skips the observer that would
    // add .in, and the message would sit at opacity 0
    grid.innerHTML = '<p class="ar-empty">Being put together — back shortly.</p>';
    grid.classList.add('is-empty');
    return;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  grid.innerHTML = ITEMS.map(function (it, i) {
    const p = PLACE[i % PLACE.length];
    // cap the tile at its own source width so nothing is ever blown up
    const cap = it.w ? ';max-width:' + Math.round(it.w * SCALE) + 'px' : '';
    return '<figure class="ar-tile reveal"'
      + ' style="--c:' + p.c + ';--s:' + p.s + ';--t:' + p.t + 'vw' + cap + '">'
      +   '<img src="' + it.src + '" alt="' + esc(it.alt) + '" loading="lazy">'
      + '</figure>';
  }).join('');

  // reveal-on-scroll, same as the rest of the site
  const io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .08 });
  grid.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
