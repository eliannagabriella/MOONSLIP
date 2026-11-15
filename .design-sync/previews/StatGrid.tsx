import * as React from "react";
import { StatGrid, Stat } from "moonslip-ui";

export const Headline = () => (
  <StatGrid>
    <Stat value="11" unit="SITES" caption="Curated landing sites, five with real polar terrain skylines" />
    <Stat value="8,760" unit="H" caption="Hourly Sun and Earth positions per site" />
    <Stat value="18" unit="CHECKS" caption="All 18 values match NASA JPL Horizons" />
    <Stat value="0.019" unit="DEG" caption="Largest disagreement with Horizons" />
  </StatGrid>
);
