# brookerogersdesign.com

Portfolio site for Brooke Rogers Design. Static, served by **GitHub Pages** from
the `main` branch of this repo. Custom domain is set by `CNAME`
(`brookerogersdesign.com`) — do not delete that file, the domain breaks without it.

## Structure

Everything sits at the repo root. There is no `images/` folder — HTML references
bare filenames like `owa-desktop.jpg`.

| File | Purpose |
| --- | --- |
| `index.html` | Home — 5 featured projects, then "View all work" |
| `work.html` | Gallery — every project |
| `info.html` | About. Light theme, scoped under `body.info-body` |
| `styles.css` | All styles |
| `cases.js` | Project data + the full-screen case-study overlay |
| `og-image.jpg` | Social card, 1200×630 |

## Design

- Type: **Neue Haas Grotesk** via Adobe Fonts (`use.typekit.net/qay0tct.css`).
  Display for large type, Text for small UI type.
  **Only weights 400 and 700 are licensed — never use 500.**
- Color: red `#E02020`, cream `#FBF5EB`, ink `#111110`.
- Home and Work are dark; Info is light.
- Wordmark: "brooke" red, "rogers" white. Favicon is a red dot, inline SVG.
- Nav: Work, Info, Soundtrack. No Contact.
- Rounded frames throughout: 24px radius, 12px inset.

## Case studies

`cases.js` holds every project as an entry in `CASES`. Each has `name`,
`tagline`, `client`, `year`, `type[]` and `blocks[]`. Block kinds:

```js
{ text: 'BOLD LEAD-IN', body: 'rest of the sentence' }
{ image: 'file.jpg' }                 // full width
{ pair: ['left.jpg', 'right.jpg'] }   // two up
{ trio: ['a.jpg', 'b.jpg', 'c.jpg'] } // three up
{ bleed: 'file.jpg' }                 // edge to edge
{ red: 'file.jpg' }                   // on the red field
{ video: 'file.mp4', poster: 'file.jpg' }
```

A project only appears on the site if it has **both** a card in `work.html`
(`data-case="key"`) and a matching key in `CASES`.

**400 Central** (`central400`) is the reference implementation — 11 images,
4 statements. Model new case studies on it.

## Adding a project

1. Drop raw exports into `../Project Images/<nn Name>/`.
2. Compress: 100–400KB each, max 1800px. Convert GIFs to MP4
   (autoplay, loop, muted, playsinline).
3. Name them `<key>-01.jpg`, `<key>-02.jpg` … in display order.
4. Featured crops for the homepage are two sizes — desktop 2560×1350,
   mobile 1200×1950 — swapped with `<picture>` at 768px.
5. Add the card to `work.html` and the entry to `cases.js`.
6. Commit and push. Pages redeploys in about a minute.

## Gotchas

- `.statement p` outranks `.about-label` on specificity — section labels inside
  `.statement` must be written `.statement p.about-label`.
- Desktop `.work-meta .tags` uses `justify-content:flex-end; max-width:60%` —
  mobile must override to `flex-start` / `100%`.
- Adobe Fonts only serves the typeface to allow-listed domains.
  `brookerogersdesign.com`, `www`, and the `github.io` URL must all be listed
  in the web project, or type falls back.
- DNS is at **IONOS**. Apex uses four A records at `185.199.108–111.153`.
  Email is Google Workspace (5 MX + SPF) — never touch those records.
