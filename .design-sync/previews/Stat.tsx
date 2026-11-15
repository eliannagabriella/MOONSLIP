import * as React from "react";
import { StatGrid, Stat } from "moonslip-ui";

export const Single = () => (
  <StatGrid columns={2}>
    <Stat value="8,760" unit="H" caption="Hourly Sun and Earth positions per site" />
    <Stat value="0.019" unit="DEG" caption="Largest disagreement with Horizons" />
  </StatGrid>
);
