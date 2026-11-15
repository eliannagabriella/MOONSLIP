import * as React from "react";
import { Legend, LegendItem } from "moonslip-ui";

export const CalendarKey = () => (
  <Legend>
    <LegendItem verdict="go">survivable</LegendItem>
    <LegendItem verdict="caution">passes, no buffer</LegendItem>
    <LegendItem verdict="nogo">fails</LegendItem>
    <LegendItem verdict="nodata">past end of data</LegendItem>
  </Legend>
);

export const ChartKey = () => (
  <Legend>
    <LegendItem lineColor="var(--sun)">Sun elevation</LegendItem>
    <LegendItem lineColor="var(--sun)" dashed>Sun limit</LegendItem>
    <LegendItem lineColor="var(--earth)">Earth elevation</LegendItem>
    <LegendItem lineColor="var(--band)" thickness={10}>dark (Sun below limit)</LegendItem>
  </Legend>
);
