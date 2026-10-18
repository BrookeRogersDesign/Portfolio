/* ============================================================
   ARCHIVE — experimental ideas and work that never made it out.

   A plain gallery on white: three across, nothing to click, no numbering.

   `src`  the image (already compressed, cut at native size)
   `w`     its natural width in px. A tile is capped at this, so a piece
           can never render larger than it was actually drawn — small
           pieces simply sit smaller in their column.
   `scale` optional, 0-1. Takes one piece down further than its natural
           width, for art that reads large for how light it is.
   `alt`  what it is, for screen readers — never left blank

   To add a piece: drop it in ITEMS. Nothing else needs touching.
   ============================================================ */
(function () {
  const ITEMS = [
    { src: 'ar-01.jpg', w: 672,  alt: 'Sunburst crest on burgundy \u2014 unused' },
    { src: 'ar-02.jpg', w: 553,  alt: 'Stacked mark over water \u2014 unused' },
    { src: 'ar-03.jpg', w: 1092, alt: 'ACIC \u2014 bold, precise, confident, uplifting, unified \u2014 unused direction' },
    { src: 'ar-04.jpg', w: 782,  alt: '201 Central Ave Bar, St. Pete \u2014 unused' },
    { src: 'ar-05.jpg', w: 676,  alt: 'St. Pete Bar, Central Ave \u2014 unused' },
    { src: 'ar-06.jpg', w: 245,  alt: 'MM monogram \u2014 unused' },
    { src: 'ar-07.jpg', w: 790,  alt: 'Mira Mar envelope \u2014 unused' },
    { src: 'ar-08.jpg', w: 544,  alt: 'Linked mark on bronze \u2014 unused' },
    { src: 'ar-09.jpg', w: 451,  scale: 0.6, alt: 'Runner and dog illustration \u2014 unused' },
    { src: 'ar-10.jpg', w: 747,  alt: 'Mark on sage \u2014 unused' },
    { src: 'ar-11.jpg', w: 943,  alt: 'Interiors logotype and social mockup \u2014 unused' },
    { src: 'ar-12.jpg', w: 1289, alt: 'ANNEX \u2014 functional movement, more than just fitness \u2014 unused concept' },
    { src: 'ar-13.jpg', w: 1046, alt: '310 Harrison \u2014 app screens, unused concept' },
    { src: 'ar-14.jpg', w: 544,  alt: 'AirPlayne logo \u2014 unused' }
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

  grid.innerHTML = ITEMS.map(function (it) {
    // never render a piece larger than its source. `scale` takes an individual
    // piece down further — line art with a lot of white space reads much
    // bigger than a dense image at the same width.
    const cap = it.w
      ? ' style="max-width:' + Math.round(it.w * (it.scale || 1)) + 'px"'
      : '';
    return '<figure class="ar-tile reveal"' + cap + '>'
      +   '<img src="' + it.src + '" alt="' + esc(it.alt) + '" loading="lazy">'
      + '</figure>';
  }).join('');

  // reveal-on-scroll, same as the rest of the site
  const io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .08 });
  grid.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
