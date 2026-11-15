import * as React from "react";
import { DataTable, VerdictPill, Chip } from "moonslip-ui";

export const Validation = () => (
  <DataTable
    columns={[
      { key: "site", header: "Site", align: "left" },
      { key: "time", header: "Time (UTC)", align: "left" },
      { key: "q", header: "Quantity", align: "left" },
      { key: "ours", header: "Ours" },
      { key: "jpl", header: "Horizons" },
      { key: "d", header: "Difference" },
    ]}
    rows={[
      { site: "Apollo 11", time: "2026-12-01 00:00", q: "Sun elevation", ours: "12.403°", jpl: "12.398°", d: <span className="ms-ok">0.005°</span> },
      { site: "IM-1 Odysseus", time: "2027-03-14 12:00", q: "Earth elevation", ours: "4.118°", jpl: "4.099°", d: <span className="ms-ok">0.019°</span> },
      { site: "Shackleton A", time: "2027-06-21 06:00", q: "Sun azimuth", ours: "211.640°", jpl: "211.652°", d: <span className="ms-ok">0.012°</span> },
    ]}
  />
);

export const ScenarioCompare = () => (
  <DataTable
    columns={[
      { key: "s", header: "Scenario", align: "left" },
      { key: "site", header: "Site", align: "left" },
      { key: "slip", header: "Slip" },
      { key: "v", header: "Verdict", align: "left" },
      { key: "a", header: "", align: "left" },
    ]}
    rows={[
      { s: "Baseline", site: "IM-2 Athena", slip: "0 d", v: <VerdictPill verdict="go" size="sm" />, a: <Chip>Open</Chip> },
      { s: "Slip +6", site: "IM-2 Athena", slip: "6 d", v: <VerdictPill verdict="caution" size="sm" />, a: <Chip>Open</Chip> },
      { s: "Slip +12", site: "IM-2 Athena", slip: "12 d", v: <VerdictPill verdict="nogo" size="sm" />, a: <Chip>Open</Chip> },
    ]}
  />
);
