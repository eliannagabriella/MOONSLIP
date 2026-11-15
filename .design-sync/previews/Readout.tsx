import * as React from "react";
import { ReadoutGrid, Readout, VerdictPill } from "moonslip-ui";

export const VerdictRow = () => (
  <ReadoutGrid>
    <Readout label="Verdict" sub="IM-2 Athena, landing 2026-12-16">
      <VerdictPill verdict="go" />
    </Readout>
    <Readout label="Slip margin" value="4 days" sub="more slip before the verdict turns Red" />
    <Readout label="Next green window" value="26 Feb" sub="if the slip grows past 16 days" />
    <Readout label="Best alternate" value="Malapert M1" sub="GREEN, slip margin 4 days" />
  </ReadoutGrid>
);

export const SingleReadout = () => (
  <ReadoutGrid columns={2}>
    <Readout label="Result" value="18 of 18" sub="All within the 0.05° target" />
    <Readout label="Largest error" value="0.019°" sub="Earth elevation, IM-1 Odysseus" />
  </ReadoutGrid>
);
