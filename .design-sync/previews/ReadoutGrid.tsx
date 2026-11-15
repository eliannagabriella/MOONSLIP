import * as React from "react";
import { ReadoutGrid, Readout, VerdictPill } from "moonslip-ui";

export const Answer = () => (
  <ReadoutGrid columns={3}>
    <Readout label="Verdict"><VerdictPill verdict="caution" /></Readout>
    <Readout label="Slip margin" value="0 days" sub="passes, no buffer left" />
    <Readout label="Best alternate" value="Shackleton A" sub="GREEN, slip margin 9 days" />
  </ReadoutGrid>
);
