import * as React from "react";
import { Legend, LegendItem } from "moonslip-ui";

export const Swatches = () => (
  <Legend>
    <LegendItem verdict="go">survivable</LegendItem>
    <LegendItem lineColor="var(--earth)">Earth elevation</LegendItem>
    <LegendItem lineColor="var(--earth)" dashed>Earth horizon</LegendItem>
  </Legend>
);
