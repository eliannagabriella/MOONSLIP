# Moon Slip UI — how to build with it

Moon Slip is a **dark-only "Liquid Glass Minimal"** system for mission-control readouts: night-sky ground, frosted navy panels, light Inter type, JetBrains Mono labels, Boldonse only for brand moments. Voice is formal and quiet: one idea per section, lots of air.

## 1. Always wrap in `MoonSlipRoot`

`MoonSlipRoot` paints the gradient ground (#0a0a0c → #0b1838 → #4d4177), sets Inter, the ink colour (`--ink`), focus rings and box-sizing. Without it, components sit on a white page with browser-default type and the glass reads as grey smudges. Wrap each screen once:

```jsx
const { MoonSlipRoot } = window.MoonSlipUI;
<MoonSlipRoot>{/* whole screen */}</MoonSlipRoot>            // full viewport height
<MoonSlipRoot fullHeight={false} style={{ padding: 32 }}>…</MoonSlipRoot>  // embedded
```

There is no light theme. Never put components on a white or light background.

## 2. Styling idiom: components first, then tokens

- Build UI from components and their props (`variant`, `size`, `verdict`, `columns`). Don't restyle them with colours or shadows.
- For your own layout glue (grids, gaps, widths), use inline `style` with flex/grid and these tokens via `var(--…)`:
  - Colour: `--ink` (text), `--mute` (secondary text), `--bright` (headline figures), `--lblue` / `--accent` (accent), `--llblue` (soft text), `--blue`, `--navy`, `--purple`, `--panel`, `--line`, `--w08` / `--w12` / `--w20` (white hairlines).
  - Status: `--green`, `--yellow`, `--red`, `--nodata` (with `--on-green` / `--on-yellow` / `--on-red` for text on them). Chart lines: `--sun`, `--earth`, `--band`.
  - Radius: `--small` 16px, `--medium` 26px, `--large` 36px, `--pill`. Shadows: `--soft`, `--mediums`, `--larges`. Fonts: `--body`, `--mono`, `--disp`. Easing: `--ui`, `--rev`.
- Class names are prefixed `ms-`. Only two are meant for hand use: `ms-big` (a large light figure, as in a Readout) and `ms-ok` (green "within tolerance" text in tables). Everything else comes from the components.
- Spacing rhythm: 8 / 12 / 16 / 20 / 24 / 32px. Section gaps are 24px between Panels and 48px+ between page sections.

## 3. Which component for what

- **Page shell:** `FloatingNav` (logo, links, one `Button variant="primary" size="sm"`), `Container` (1240px column), `Wordmark` (footer sign-off).
- **Planner layout:** a 340px `Sidebar` of `FieldGroup`s (`Field` + `Select` / `Input` / `RangeSlider` with `ValueDisplay` / `Checkbox`) beside a column of `Panel`s, 24px apart.
- **Results:** `Panel` (eyebrow + title + optional description and note) holding `ReadoutGrid` / `Readout`, `VerdictPill`, `DataTable`, a `VerdictCell` heat-map with a `Legend`, or `BarRow` comparisons. Put summaries in an `Inset`.
- **Verdicts:** always `go` / `caution` / `nogo` / `nodata`, shown as GREEN / YELLOW / RED. Never invent other status colours.
- **Marketing sections:** `Label` eyebrow ("01 / Our purpose") → `Heading variant="section"` → `Text variant="body"`; `StatGrid` / `Stat` for headline figures; three `Card`s across.
- **Buttons:** one `primary` per view (`arrow` for "go somewhere" actions); `glass` for secondary; `ghost` for tertiary; `Chip` for small actions inside table rows.

## 4. Where the truth lives

Read `styles.css` → `_ds_bundle.css` for every token and `ms-` class. Read each `components/<group>/<Name>/<Name>.prompt.md` for its props and working examples before using it.

## 5. Example

```jsx
const { MoonSlipRoot, Panel, ReadoutGrid, Readout, VerdictPill, Banner, Button } = window.MoonSlipUI;

<MoonSlipRoot style={{ padding: 32 }}>
  <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
    <Banner variant="info">Loaded data: DE421, 1 h step from 2026-12-01</Banner>
    <Panel eyebrow="Answer" title="Verdict on the slipped date" note="Passes every check for the mission and the buffer.">
      <ReadoutGrid>
        <Readout label="Verdict"><VerdictPill verdict="go" /></Readout>
        <Readout label="Slip margin" value="4 days" sub="more slip before the verdict turns Red" />
        <Readout label="Next green window" value="26 Feb" sub="if the slip grows past 16 days" />
        <Readout label="Best alternate" value="Malapert M1" sub="GREEN, slip margin 4 days" />
      </ReadoutGrid>
    </Panel>
    <div><Button variant="primary" arrow>View full validation data</Button></div>
  </div>
</MoonSlipRoot>
```
