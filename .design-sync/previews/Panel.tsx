import * as React from "react";
import { Panel, ReadoutGrid, Readout, VerdictPill, VerdictCell, Legend, LegendItem } from "moonslip-ui";

export const VerdictPanel = () => (
  <Panel eyebrow="Answer" title="Verdict on the slipped date" note="Passes every check for the mission and the buffer.">
    <ReadoutGrid columns={2}>
      <Readout label="Verdict"><VerdictPill verdict="go" /></Readout>
      <Readout label="Slip margin" value="4 days" sub="more slip before the verdict turns Red" />
    </ReadoutGrid>
  </Panel>
);

export const WithDescription = () => (
  <Panel eyebrow="Step 1 · Dates" title="Slip calendar" description="Every site against every landing date in the window. Select any cell to open it below.">
    <div style={{ display: "flex", gap: 3 }}>
      {(["go", "go", "go", "caution", "nogo", "nogo", "caution", "go"] as const).map((v, i) => (
        <VerdictCell key={i} verdict={v} selected={i === 3} />
      ))}
    </div>
    <Legend style={{ marginTop: 16 }}>
      <LegendItem verdict="go">survivable</LegendItem>
      <LegendItem verdict="caution">passes, no buffer</LegendItem>
      <LegendItem verdict="nogo">fails</LegendItem>
    </Legend>
  </Panel>
);
