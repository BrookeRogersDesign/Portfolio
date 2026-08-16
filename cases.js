/* ============================================================
   CASE STUDIES
   Structure per project:
     name     — project title
     tagline  — the grey second line
     client   — client name
     year     — year
     type     — array of disciplines
     blocks   — the body, in order. Three kinds:
                { text: 'BOLD LEAD-IN', body: 'rest of the sentence' }
                { image: 'file.jpg' }                    full width
                { pair: ['left.jpg', 'right.jpg'] }      two up
     credits  — optional array of ['Role', 'Name']
   ============================================================ */
const CASES = {
  yas: {
    name: 'Sincerely YAS', tagline: 'Made to be shared.',
    client: 'Sincerely YAS', year: '2026',
    type: ['Web Design', 'Development', 'Shopify'],
    blocks: [
      { image: 'yas-01.jpg' },
      { text: 'SINCERELY YAS', body: 'is a brand built around the table — the round of drinks, the plate in the middle, the people leaning in. The site had to feel like being invited rather than sold to.' },
      { red: true, video: 'yas-homepage.mp4', poster: 'yas-poster.jpg' },
      { text: 'DESIGNED AND BUILT', body: 'end to end on Shopify — custom coded rather than themed, so every section behaves the way it was drawn instead of the way a template allows.' },
      { image: 'yas-02.jpg' },
      { pair: ['yas-03.jpg', 'yas-04.jpg'] },
      { red: 'yas-05.jpg' },
      { text: 'THE PRODUCT PAGES', body: 'carry the same warmth as the photography — generous imagery, a clear path to checkout, and a layout that holds up whether there are three products or thirty.' },
      { trio: ['yas-06.jpg', 'yas-07.jpg', 'yas-08.jpg'] }
    ]
  },
  miramar: {
    name: 'Mira Mar', tagline: 'A reimagined jewel on South Palm Avenue.',
    client: 'Mira Mar Residences, Sarasota', year: '2026',
    type: ['Branding', 'Web Design', 'Floor Plan', 'Floorplan Navigation', 'Marketing & Strategy'],
    blocks: [
      { bleed: 'mm-02.jpg' },
      { bleed: 'mm-01.jpg' },
      { text: 'MIRA MAR', body: 'sits on South Palm Avenue in Sarasota, on a site whose name is older than the building. The brand had to carry that history forward rather than paper over it \u2014 familiar to people who know the street, aspirational to those who don\u2019t yet.' },
      { pair: ['mm-04.jpg', 'mm-07.jpg'] },
      { text: 'THE IDENTITY', body: 'is built on a crest and a hand-drawn toile of the neighborhood \u2014 the arcades, the palms, the awnings \u2014 printed in a deep wine red. Old-world without tipping into pastiche.' },
      { panel: 'mm-05.jpg', bg: '#3F1516' },
      { image: 'mm-06.jpg' },
      { text: 'THE MAP', body: 'illustrates Sarasota Bay the way a resident would describe it rather than the way a cartographer would draw it \u2014 a postcard people keep instead of a brochure they recycle.' },
      { bleed: 'mm-08.jpg' },
      { text: 'THE CAMPAIGN', body: 'places the residences inside the life already happening around them \u2014 the Ringling colonnades, the Opera House, an afternoon that starts on the balcony and ends somewhere on Palm Avenue.' },
      { inset: 'mm-09.jpg', bg: '#F3EEE9' }
    ]
  },
  owa: {
    name: 'OWA', tagline: 'Open workshop for architecture.',
    client: 'OWA \u2014 Open Workshop for Architecture', year: '2022',
    type: ['Branding', 'Design'],
    blocks: [
      { bleed: 'owa-01.jpg' },
      { text: 'OWA', body: 'is a Tampa architecture practice led by principals Fadi Garcia and Jessie Shell, working across high-profile commercial projects, residential spaces and historical renovations. The brief was an identity as considered and unfussy as the buildings.' },
      { text: 'THE MARK', body: 'fragments the letters into geometry \u2014 a circle, a stroke, a triangle \u2014 so it reads as a plan drawing before it reads as a word. It holds at the scale of a stamp and at the scale of a facade.' },
      { video: true, red: true, poster: 'owa-motion-poster.jpg', motion: 'owa-motion.mp4' },
      { image: 'owa-03.jpg' },
      { image: 'owa-05.jpg' },
      { text: 'MATERIALS', body: 'drove the palette as much as the drawings did. Concrete, fluted timber and uncoated stock \u2014 the system was designed to be photographed on the materials the practice actually specifies.' },
      { image: 'owa-06.jpg' },
      { text: 'THE PALETTE', body: 'is deliberately narrow: black, real grey, grey. No accent color, because the work supplies it. Restraint is the point \u2014 the identity gets out of the way of the architecture.' },
      { bleed: 'owa-07.jpg' },
      { text: 'THE SITE', body: 'was built around the satisfying feeling of flipping through the glossy pages of a magazine \u2014 generous margins, full-bleed photography, and typography given room to breathe.' },
      { image: 'owa-09.jpg' }
    ]
  },
  unc: {
    name: '[UN]CENSORED Health', tagline: 'Honesty over polish.',
    client: '[UN]CENSORED Health', year: '2024',
    type: ['Branding', 'Web Design + Development'],
    blocks: [
      { image: 'unc-desktop.jpg' },
      { text: '[UN]CENSORED', body: 'was built for people tired of being sold an airbrushed version of wellness. The positioning came first: say the real thing, then design around it.' },
      { text: 'THE IDENTITY', body: 'pairs a stenciled logotype with raw handwritten accents — structure and instinct in the same lockup, so the brand can be direct without turning cold.' }
    ]
  },
  blank: {
    name: 'BLANK', tagline: 'The art of looking effortless.',
    client: 'BLANK \u2014 hair studio, 421 S Washington St.', year: '2025',
    type: ['Branding', 'Positioning', 'Web Design'],
    blocks: [
      { bleed: 'blank-01.jpg' },
      { text: 'BLANK', body: 'is a hair studio built on a premise that runs against everything salon branding usually does \u2014 the most considered work is the work you never notice. Positioning, identity and site were built together so the restraint reads as intent rather than absence.' },
      { panel: 'blank-02.jpg', bg: '#D9D7CE' },
      { text: 'THE MARK', body: 'mirrors its own K. Set as BLA / NK across two lines, the reversed letter reads as a flaw until you see it twice \u2014 then it reads as a signature. The BK monogram and star carry it down to stamp scale.' },
      { image: 'blank-03.jpg' },
      { image: 'blank-04.jpg' },
      { trio: ['blank-05.jpg', 'blank-06.jpg', 'blank-07.jpg'] },
      { text: 'THE POSITIONING', body: 'is rooted in The Ruler archetype \u2014 a quiet confidence that values excellence, intention and timeless sophistication over fleeting trends. The line the whole system hangs on: the art of looking effortless.' },
      { image: 'blank-08.jpg' },
      { image: 'blank-09.jpg' },
      { swatches: [
        { name: 'Bone',    hex: '#F1EDEC', cmyk: '0 2 2 5' },
        { name: 'Sand',    hex: '#C7B79D', cmyk: '0 8 21 22' },
        { name: 'Oxblood', hex: '#4B2317', cmyk: '0 53 69 71' },
        { name: 'Ink',     hex: '#261406', cmyk: '0 47 84 85' }
      ] },
      { text: 'THE PALETTE', body: 'stays in oxblood, bone, warm tan and near-black \u2014 salon colors without the gloss. Serif display against a plain grotesque keeps the voice close to a fashion house and far from a price list.' },
      { mid: 'blank-10.jpg' },
      { pair: ['blank-11.jpg', 'blank-12.jpg'] },
      { text: 'THE PROMISE', body: 'is a space where craftsmanship, conversation, and quiet luxury come together to create hair that lives beautifully beyond the salon.' },
      { image: 'blank-13.jpg' }
    ]
  },
  ora: {
    name: 'ORA Hotel + Residences', tagline: 'Discover the allure.',
    client: 'ORA Hotel + Residences', year: '2025',
    type: ['Branding', 'Web Design', 'Marketing & Strategy', 'Floorplan Navigation'],
    blocks: [
      { image: 'ora-desktop.jpg' },
      { text: 'ORA', body: 'needed a brand that could carry a tower. The work runs from positioning and identity through collateral, floorplans, sales gallery environments and the website.' },
      { text: 'THE SYSTEM', body: 'had to hold at every scale — legible on a business card, commanding across a building-sized window, and consistent across every touchpoint a buyer encounters before they ever step inside.' }
    ]
  },
  kini: {
    name: 'Hot Kini', tagline: 'Bring the heat.',
    client: 'Hot Kini', year: '2025',
    type: ['Branding', 'Positioning', 'Website', 'Social Media'],
    blocks: [
      { image: 'kini-desktop.jpg' },
      { text: 'HOT KINI', body: 'is a hot sauce line built on personality rather than heat scales. Summer Flame, Cowgirl Heat and Golden Heat each get their own colorway inside one label architecture.' },
      { text: 'ON SHELF', body: 'the range reads as a family first and a flavour second — so the brand grows without needing a redesign every time a new sauce arrives.' }
    ]
  },
  vv: {
    name: 'Vintage Vault', tagline: 'For the love of the find.',
    client: 'Vintage Vault', year: '2025',
    type: ['Branding', 'Web Design', 'Editorial'],
    blocks: [
      { image: 'vv-desktop.jpg' },
      { text: 'VINTAGE VAULT', body: 'is a collector’s book about the hunt, not the haul. The editorial design borrows from the visual language it documents — trading cards, archival print, the wear of handling.' },
      { text: 'THE BOOK', body: 'was designed to be handled as much as read, with an identity that works equally on a spine, a website, and a sticker on a case.' }
    ]
  },
  madrun: {
    name: 'MADRUN', tagline: 'Built for the mile after.',
    client: 'MADRUN', year: '2023',
    type: ['Product Design', 'Photography'],
    blocks: [
      { image: 'madrun-desktop.jpg' },
      { text: 'MADRUN', body: 'is a muscle cooling gel that lives in a gym bag, not a medicine cabinet. The packaging had to survive that and still command a shelf.' },
      { text: 'THE ANSWER', body: 'was high-contrast type and a single fluid mark that reads at arm’s length, shot on location mid-run rather than on seamless.' }
    ]
  },
  gracewater: {
    name: 'Gracewater', tagline: 'Life feels lighter here.',
    client: 'Gracewater, Sarasota', year: '2025',
    type: ['Rebrand', 'Floorplans', 'Web Design'],
    blocks: [
      { image: 'gracewater-desktop.jpg' },
      { text: 'GRACEWATER', body: 'is a residential community in Sarasota that had been speaking in the same muted palette as every other development in the category.' },
      { text: 'THE REBRAND', body: 'trades that for chartreuse and water — paired with floorplan design and a website built to make browsing homes feel like anticipation rather than research.' }
    ]
  },
  central400: {
    name: '400 Central', tagline: 'Luxury living in the sky.',
    client: '400 Central Residences, St. Petersburg', year: '2024',
    type: ['Branding', 'Digital Campaigns', 'Print', 'Floorplans', 'Website'],
    blocks: [
      { image: 'c400-01.jpg' },
      { text: '400 CENTRAL', body: 'is the tallest residential tower on Florida’s Gulf Coast — forty-six stories above downtown St. Petersburg. The brand had to sell a view that didn’t exist yet, to buyers making a decision years before handover.' },
      { image: 'c400-02.jpg' },
      { pair: ['c400-03.jpg', 'c400-04.jpg'] },
      { text: 'THE IDENTITY', body: 'is built on a single elongated mark — a stacked, rounded form echoing the tower’s silhouette — set against a deep navy and paired with a high-contrast serif. Restrained enough to sit on a debossed business card, distinctive enough to hold a building.' },
      { image: 'c400-05.jpg' },
      { image: 'c400-06.jpg' },
      { text: 'THE BRAND BOOK', body: 'carries a buyer from the skyline down to the finish schedule — sky lounge, observatory, residences — with photography commissioned to place them in the life rather than the building.' },
      { pair: ['c400-07.jpg', 'c400-08.jpg'] },
      { text: 'FLOORPLANS', body: 'were designed as part of the brand rather than an appendix to it: the penthouse collection, the residences, and the navigation that lets a buyer move between them without ever leaving the world of the identity.' },
      { image: 'c400-09.jpg' },
      { image: 'c400-10.jpg' },
      { image: 'c400-11.jpg' }
    ]
  }
};

(function () {
  const overlay = document.createElement('div');
  overlay.className = 'case-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="case-inner"></div>';
  document.body.appendChild(overlay);
  const inner = overlay.querySelector('.case-inner');
  let lastFocus = null;
  let isOpen = false;

  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

  function renderBlock(b, name) {
    if (b.bleed) return '<figure class="cs-bleed"><img src="' + b.bleed + '" alt="' + esc(name) + '" loading="lazy"></figure>';
    if (b.inset) return '<div class="cs-inset"' + (b.bg ? ' style="background:' + b.bg + '"' : '') + '><img src="' + b.inset + '" alt="' + esc(name) + '" loading="lazy"></div>';
    if (b.panel) return '<div class="cs-panel" style="background:' + (b.bg || '#3F1516') + '"><img src="' + b.panel + '" alt="' + esc(name) + '" loading="lazy"></div>';
    if (b.mid)   return '<figure class="cs-mid"><img src="' + b.mid + '" alt="' + esc(name) + '" loading="lazy"></figure>';
    if (b.motion) return '<figure class="cs-full"><video autoplay loop muted playsinline preload="metadata" poster="' + b.poster + '"><source src="' + b.motion + '" type="video/mp4"></video></figure>';
    if (b.red)   return '<div class="cs-red">' + (b.video
      ? '<video autoplay loop muted playsinline preload="metadata" poster="' + b.poster + '"><source src="' + b.video + '" type="video/mp4"></video>'
      : '<img src="' + b.red + '" alt="' + esc(name) + '" loading="lazy">') + '</div>';
    if (b.quad)  return '<div class="cs-quad">' + b.quad.map(function (s) {
      return '<img src="' + s + '" alt="' + esc(name) + '" loading="lazy">'; }).join('') + '</div>';
    if (b.swatches) return '<div class="cs-swatches">' + b.swatches.map(function (c) {
      var h = c.hex.replace('#', '');
      var r = parseInt(h.substr(0,2),16), g = parseInt(h.substr(2,2),16), bl = parseInt(h.substr(4,2),16);
      var lum = (0.299*r + 0.587*g + 0.114*bl) / 255;
      // shades below the base, tints above — mixed toward black / white
      function mix(t) {
        var to = t < 0 ? 0 : 255, a = Math.abs(t);
        function m(v) { return Math.round(v + (to - v) * a); }
        return 'rgb(' + m(r) + ',' + m(g) + ',' + m(bl) + ')';
      }
      var steps = [-0.45, -0.22, 0, 0.22, 0.45].map(function (t, i) {
        return '<i style="background:' + (t === 0 ? c.hex : mix(t))
             + ';transition-delay:' + (i * 45) + 'ms"></i>';
      }).join('');
      return '<div class="cs-swatch' + (lum > 0.55 ? ' on-light' : '') + '" style="background:' + c.hex + '" tabindex="0">'
        + '<div class="sw-steps">' + steps + '</div>'
        + '<div class="sw-info">'
        +   '<span class="sw-name">' + esc(c.name) + '</span>'
        +   '<span class="sw-val">' + esc(c.hex.toUpperCase()) + '</span>'
        +   '<span class="sw-val">RGB ' + r + ' ' + g + ' ' + bl + '</span>'
        +   (c.cmyk ? '<span class="sw-val">CMYK ' + esc(c.cmyk) + '</span>' : '')
        +   (c.pantone ? '<span class="sw-val">PMS ' + esc(c.pantone) + '</span>' : '')
        + '</div></div>';
    }).join('') + '</div>';
    if (b.trio)  return '<div class="cs-trio">' + b.trio.map(function (s) {
      return '<img src="' + s + '" alt="' + esc(name) + '" loading="lazy">'; }).join('') + '</div>';
    if (b.image) return '<figure class="cs-full"><img src="' + b.image + '" alt="' + esc(name) + '" loading="lazy"></figure>';
    if (b.pair)  return '<div class="cs-pair">' + b.pair.map(function (s) {
      return '<figure><img src="' + s + '" alt="' + esc(name) + '" loading="lazy"></figure>'; }).join('') + '</div>';
    if (b.text)  return '<p class="cs-statement"><span class="lead">' + esc(b.text) + '</span> ' + esc(b.body) + '</p>';
    return '';
  }

  function render(c) {
    inner.innerHTML =
      '<div class="case-tab"><button type="button" class="case-close">Close <span class="x">\u00d7</span></button></div>' +
      '<header class="cs-head">' +
        '<h1>' + esc(c.name) + '<span class="cs-tagline">' + esc(c.tagline) + '</span></h1>' +
        '<div class="cs-meta">' +
          '<div class="cs-meta-left">' +
            '<span class="m"><b>Client</b>' + esc(c.client) + '</span>' +
            '<span class="m"><b>Year</b>' + esc(c.year) + '</span>' +
          '</div>' +
          '<div class="cs-meta-right"><b>Type</b>' +
            c.type.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="cs-body">' + c.blocks.map(function (b) { return renderBlock(b, c.name); }).join('') + '</div>' +
      (c.credits ? '<div class="cs-credits"><b>Collaborators</b>' + c.credits.map(function (r) {
          return '<span>' + esc(r[0]) + ' <em>' + esc(r[1]) + '</em></span>'; }).join('') + '</div>' : '') +
      '<button class="case-close case-close-bottom" type="button">Close</button>';
  }

  // show — the visual part only
  function show(key, focus) {
    const c = CASES[key];
    if (!c) return false;
    render(c);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('case-locked');
    inner.scrollTop = 0;
    isOpen = true;
    if (focus) inner.querySelector('.case-close').focus();
    return true;
  }

  function hide() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('case-locked');
    isOpen = false;
    if (lastFocus) { try { lastFocus.focus(); } catch (e) {} }
  }

  // open — adds a history entry so Back closes it and refresh restores it
  function open(key) {
    if (!CASES[key]) return;
    lastFocus = document.activeElement;
    if (show(key, true)) history.pushState({ caseKey: key }, '', '#case-' + key);
  }

  function close() {
    if (!isOpen) return;
    if (history.state && history.state.caseKey) history.back();  // popstate does the hiding
    else { hide(); history.replaceState({}, '', location.pathname + location.search); }
  }

  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-case]');
    if (trigger) { e.preventDefault(); open(trigger.dataset.case); return; }
    if (e.target.closest('.case-close')) { e.preventDefault(); close(); }
    else if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) close();
  });

  // Back / Forward behave like a normal site
  window.addEventListener('popstate', function (e) {
    const key = (e.state && e.state.caseKey) || keyFromHash();
    if (key && CASES[key]) show(key, false);
    else hide();
  });

  function keyFromHash() {
    const h = location.hash || '';
    return h.indexOf('#case-') === 0 ? h.slice(6) : null;
  }

  // refreshing on an open case study reopens it
  const initial = keyFromHash();
  if (initial && CASES[initial]) {
    history.replaceState({ caseKey: initial }, '', location.hash);
    show(initial, false);
  }
})();
