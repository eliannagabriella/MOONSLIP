import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  MoonSlipRoot, Container, FloatingNav, Button, Label, Heading, Text, StatGrid, Stat, Card,
  Sidebar, FieldGroup, Field, Select, Input, RangeSlider, ValueDisplay, Checkbox,
  Banner, Panel, ReadoutGrid, Readout, VerdictPill, Legend, LegendItem, VerdictCell,
  DataTable, Inset, BarRow, Tag, Chip, CodeBlock, Dialog, Wordmark, GlassSurface,
} from "../src";
import "../src/styles/moonslip.css";

/** A full composition of the Moon Slip library, mirroring the original planner page. */
function Demo() {
  const [slip, setSlip] = React.useState(12);
  return (
    <MoonSlipRoot>
      <div style={{ padding: "16px 12px 0" }}>
        <FloatingNav
          scrolled
          links={[{ label: "Verdict", active: true }, { label: "Calendar" }, { label: "Chart" }, { label: "Validation" }]}
          action={<Button variant="primary" size="sm" arrow>Explore landing sites</Button>}
        />
      </div>

      <Container style={{ padding: "64px max(5vw,16px)" }}>
        <Label>NASA Space Apps 2026 · Lunar Landing Site Navigator</Label>
        <Heading variant="display" style={{ margin: "20px 0 28px" }}>MOON SLIP</Heading>
        <Text variant="lead" style={{ marginBottom: 36 }}>
          My launch slipped N days. Is my landing site still survivable, and what is the best alternate site or date?
        </Text>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="primary" arrow>Explore landing sites</Button>
          <Button variant="ghost">How it works</Button>
          <Button>Pin current scenario</Button>
        </div>

        <StatGrid style={{ marginTop: 64 }}>
          <Stat value="11" unit="SITES" caption="Curated landing sites, five with real polar terrain skylines" />
          <Stat value="8,760" unit="H" caption="Hourly Sun and Earth positions per site" />
          <Stat value="18/18" unit="CHECKS" caption="Values checked against NASA JPL Horizons" />
          <Stat value="0.019" unit="DEG" caption="Largest disagreement with Horizons" />
        </StatGrid>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20, marginTop: 48 }}>
          <Card eyebrow="Step 1" title="Pick a site and a date">Eleven sites from Apollo 11 to the Shackleton ridge.</Card>
          <Card eyebrow="Step 2" title="Enter the launch slip">The landing slips by the same amount and every verdict is recomputed.</Card>
          <Card eyebrow="Step 3" title="Read the verdict">Green, Yellow or Red from a written, adjustable formula.</Card>
        </div>
      </Container>

      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 max(3vw,16px) 40px", display: "grid", gridTemplateColumns: "340px minmax(0,1fr)", gap: 24, alignItems: "start" }}>
        <Sidebar eyebrow="Slip-Recovery Planner" title="Is my site still survivable?" intro="Pick a site and date, enter the slip, read the verdict.">
          <FieldGroup label="Your plan">
            <Field label="Landing site">
              <Select options={[{ value: "im1", label: "IM-1 Odysseus" }, { value: "shk", label: "Shackleton ridge, point A" }]} />
            </Field>
            <Field label="Planned landing date (00:00 UTC)"><Input type="date" defaultValue="2027-02-14" /></Field>
            <div className="ms-field">
              <ValueDisplay label="Launch slip" value={slip} unit="DAYS" />
              <RangeSlider min={0} max={60} value={slip} onChange={(e) => setSlip(+e.target.value)} />
            </div>
          </FieldGroup>
          <FieldGroup label="Verdict formula">
            <Checkbox label="Comms with Earth required" defaultChecked />
            <Button variant="ghost" size="sm">Load data.json</Button>
          </FieldGroup>
        </Sidebar>

        <main style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Banner>SAMPLE DATA - NOT REAL</Banner>
          <Banner variant="info">Real data loaded · JPL DE421 · 8,760 hourly steps</Banner>
          <Panel eyebrow="Answer" title="Verdict on the slipped date" note="Sun stays above the 2° limit for the whole 10-day mission; Earth is visible at landing.">
            <ReadoutGrid>
              <Readout label="Verdict"><VerdictPill verdict="go" /></Readout>
              <Readout label="Margin left" value="4 days" sub="before the site turns Yellow" />
              <Readout label="Next good window" value="26 Feb" sub="if the slip grows past 16 days" />
              <Readout label="Best alternate" value="Shackleton A" sub="86% sunlit over the year" />
            </ReadoutGrid>
          </Panel>
          <Panel eyebrow="Step 1 · Dates" title="Slip calendar" description="Every site against every landing date in the window.">
            <div style={{ display: "flex", gap: 3 }}>
              {(["go", "go", "caution", "nogo", "nogo", "caution", "go", "go", "nodata"] as const).map((v, i) => (
                <VerdictCell key={i} verdict={v} selected={i === 2} />
              ))}
            </div>
            <Legend style={{ marginTop: 16 }}>
              <LegendItem verdict="go">survivable</LegendItem>
              <LegendItem verdict="caution">passes, no buffer</LegendItem>
              <LegendItem verdict="nogo">fails</LegendItem>
              <LegendItem lineColor="var(--sun)">Sun elevation</LegendItem>
              <LegendItem lineColor="var(--earth)" dashed>Earth horizon</LegendItem>
            </Legend>
          </Panel>
          <Panel eyebrow="Step 3 · Proof" title="Validation against JPL Horizons">
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: 24 }}>
              <DataTable
                columns={[{ key: "site", header: "Site", align: "left" }, { key: "q", header: "Quantity", align: "left" }, { key: "ours", header: "Ours" }, { key: "jpl", header: "Horizons" }, { key: "d", header: "Δ" }]}
                rows={[
                  { site: "Apollo 11", q: "Sun el", ours: "12.403°", jpl: "12.398°", d: <span className="ms-ok">0.005</span> },
                  { site: "IM-1 Odysseus", q: "Earth el", ours: "4.118°", jpl: "4.099°", d: <span className="ms-ok">0.019</span> },
                ]}
              />
              <Inset>
                <Label variant="key">Result</Label>
                <div className="ms-big">18 of 18</div>
                <Text variant="small">All within the 0.05° target.</Text>
                <Button variant="primary" arrow>View full validation data</Button>
              </Inset>
            </div>
          </Panel>
          <GlassSurface>
            <Label>IM-1 Odysseus · Sun visible over the year <Tag>terrain</Tag></Label>
            <BarRow label="Real skyline" value={34} />
            <BarRow label="Smooth Moon" value={49} />
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}><Chip>Open</Chip><Chip>Remove</Chip></div>
          </GlassSurface>
          <Dialog inline open eyebrow="Full data" title="Validation, terrain checks and data format">
            <h3>Data contract v1.0</h3>
            <CodeBlock>{`{ "meta": { "contract":"1.0", "step_hours":1, "n_steps":8760 } }`}</CodeBlock>
            <Text variant="small">All angles in degrees.</Text>
          </Dialog>
        </main>
      </div>
      <Container><Wordmark /></Container>
    </MoonSlipRoot>
  );
}

createRoot(document.getElementById("root")!).render(<Demo />);
