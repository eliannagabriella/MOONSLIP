import * as React from "react";
import { Banner } from "moonslip-ui";

export const Warning = () => <Banner>SAMPLE DATA - NOT REAL</Banner>;

export const Info = () => (
  <Banner variant="info">Loaded data: Skyfield 1.55, DE421, frame MOON_ME_DE421, 1 h step from 2026-12-01T00:00:00Z</Banner>
);
