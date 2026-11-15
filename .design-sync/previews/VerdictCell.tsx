import * as React from "react";
import { VerdictCell } from "moonslip-ui";

export const CalendarRow = () => (
  <div style={{ display: "flex", gap: 3 }}>
    {(["go", "go", "go", "caution", "nogo", "nogo", "nogo", "caution", "go", "go", "nodata", "nodata"] as const).map((v, i) => (
      <VerdictCell key={i} verdict={v} selected={i === 4} aria-label={`Day ${i + 16}`} />
    ))}
  </div>
);

export const AllVerdicts = () => (
  <div style={{ display: "flex", gap: 8 }}>
    <VerdictCell verdict="go" />
    <VerdictCell verdict="caution" />
    <VerdictCell verdict="nogo" />
    <VerdictCell verdict="nodata" />
  </div>
);
