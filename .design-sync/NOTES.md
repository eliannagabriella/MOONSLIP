# design-sync notes — moonslip-ui

## Setup (Windows, this machine)
- Build the package first: `npm ci && npm run build` (tsup → `dist/index.js`, `dist/index.d.ts`, plus `scripts/copy-css.cjs` copies `src/styles/moonslip.css` → `dist/moonslip.css`, which is `cfg.cssEntry`).
- Converter entry: `--entry ./dist/index.js --node-modules ./node_modules` (npm doesn't self-install the package).
- No Playwright browser download: install only the library (`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright` in `.ds-sync/`) and point the render check at installed Chrome:
  `DS_CHROMIUM_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe"` for `package-validate.mjs`, `package-capture.mjs` and `resync.mjs`.
- npm 11 prints `install-scripts` warnings for esbuild; harmless, the builds still work.
- `/design-login` only runs in Claude Code in a regular terminal, not in the desktop app's Code tab.

## Design-system facts
- Dark-only. Every preview needs `MoonSlipRoot` (set as `cfg.provider` with `fullHeight:false`, 32px padding). Without it, cards render on the harness's white body and look broken.
- Groups come from frontmatter-only stubs in `.design-sync/groups/<Name>.md` (`cfg.docsDir`). An empty doc body keeps the synthesized `.prompt.md` (props + preview examples) and only sets the category. Add a stub for every new component, or it lands in "general".
- `Wordmark` sizes off the viewport (13.5vw) and clips inside narrow containers. Its preview caps `fontSize`; designs in narrow containers should do the same.
- Wide components use `cardMode: "column"`: FloatingNav, DataTable, StatGrid, Panel, Container, Wordmark, Heading, Readout. Taller cards: Sidebar (`single`, 480x860) and Dialog (`single`, 900x640, rendered with `inline`).

## Known render warns
- None outstanding at the end of the first sync (37/37 clean, 0 bad / thin / identical).

## Re-sync risks
- `src/styles/moonslip.css` is a hand copy of the CSS in `Moon Slip_ Slip-Recovery Planner.html`. If the page's CSS changes, the library won't follow it automatically.
- Fonts load remotely from Google Fonts (`@import` in the stylesheet, `[FONT_REMOTE]`). Offline renders fall back to system fonts.
- Render checks used local Chrome rather than a pinned Playwright Chromium. A Chrome update could shift screenshots slightly; grades follow sources, so this shouldn't clear them.
- `cfg.provider.props.style` is inlined config; keep it in step with `MoonSlipRoot`'s props.
