# NLE — No Lame Engineers
 
> A community of engineering-minded fellows, proud to welcome aboard any engineer who is not lame.
> Our goals are to learn, share and... engineer.
 
🌐 **Live site:** [n-l-e.com](https://n-l-e.com)
 
This repository holds the source of the NLE landing page: a single static page with an animated "Matrix"-style background, the community manifesto (what makes someone a *lame engineer*), and a support section.
 
## Features
 
- **Matrix rain background:** a `<canvas>` animation of falling green glyphs drawn only from the letters `N O L A M E G I R S`, so the rain spells out the community's own name. Column lengths, speeds and start offsets are randomized and re-rolled every time a column leaves the screen.
- **Full-screen intro:** the header sits at the bottom of the first screen. Clicking it scrolls down to the content, or back to the top if you've already scrolled. The arrow indicator flips to match.
- **Mobile-aware layout:** offsets are recalculated only when the document size actually changes, so the layout copes with mobile browsers showing and hiding the address bar.
- **One-click wallet copy:** BTC and ETH addresses in the Support section can be copied to the clipboard with a single click.
- **Terminal-style footer:** the contact link animates with a blinking cursor once it scrolls into view.
- **Installable:** ships with a web app manifest (`standalone` display, `#000A00` theme), so the page can be added to a home screen.
- **No dependencies:** plain HTML, CSS and vanilla ES modules. No framework, no bundler, no build step.

## Project structure
 
```
NLE/
├── index.html               # The page
├── manifest.webmanifest     # PWA manifest
├── CNAME                    # Custom domain (n-l-e.com) for GitHub Pages
└── assets/
    ├── scripts/
    │   ├── index.js         # Entry point, imports the modules below
    │   ├── global.js        # window.resizeApi: runs callbacks only on real size changes
    │   ├── dom.js           # Scroll/click behaviour, layout offsets, clipboard copy
    │   ├── matrix.js        # Canvas "Matrix rain" animation
    │   └── utils.js         # Helpers (randomInt, CSS variable get/set, viewport checks)
    ├── styles/
    │   ├── index.css        # Imports all other stylesheets
    │   ├── variables.css    # Design tokens: spacing units, green palette, header height
    │   ├── reset.css, common.css, main.css, header.css,
    │   └── support.css, footer.css, scrollbar.css, selection.css
    └── icons/
        ├── *.svg, favicon.ico   # Icons used on the page
        └── src/*.cdr            # CorelDRAW source files for the icons
```
 
## Running locally
 
The scripts are loaded as ES modules (`type="module"`), which browsers won't run from `file://`. Serve the folder over HTTP instead. Any static server works:
 
```bash
git clone https://github.com/No-Lame-Engineers/NLE.git
cd NLE
 
# pick one
python3 -m http.server 8080
npx serve .
```
 
Then open <http://localhost:8080>.
 
## Customization
 
- **Colours:** the whole palette lives in `assets/styles/variables.css` (`--primary-darkest` … `--primary-lightest`). The canvas uses the same greens, set in the `colorScheme` array in `assets/scripts/matrix.js`.
- **Matrix glyphs and speed:** edit `chars`, `msInterval`, `minCharsLength`/`maxCharsLength` and `minYColumnStep`/`maxYColumnStep` at the top of `matrix.js`.
- **Header height:** `--header-height` in `variables.css` (50px, or 70px at ≥ 992px). `dom.js` reads it to place the header at the bottom of the first screen.

## Deployment
 
The site is static and meant for GitHub Pages: the `CNAME` file points the Pages deployment at `n-l-e.com`. Pushing to the publishing branch is all a deploy takes.
 
## Are you a lame engineer?
 
You are, if you:
 
- Are toxic
- Think impossible exists
- Underestimate simplicity
- Have no aesthetic feeling
- Are not on a pilgrimage of seeking your true self
- Want to reach heights without conquering yourself
- Think of hierarchy as a means of dominating others
- Forget to put `;` at the end of JavaScript statements
- Are not open to exploring new ideas and welcoming constructive criticism

## Contact
 
[LinkedIn](https://www.linkedin.com/in/vslipchenko/)
