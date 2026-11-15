import * as React from "react";
import { Card } from "moonslip-ui";

const Orbit = () => (
  <svg viewBox="0 0 200 120" aria-hidden="true">
    <circle cx="100" cy="60" r="34" fill="#c8ddf5" opacity=".85" />
    <ellipse cx="100" cy="60" rx="80" ry="26" fill="none" stroke="#88a5e0" strokeDasharray="4 5" opacity=".6" />
    <circle cx="176" cy="58" r="5" fill="#88a5e0" />
  </svg>
);

export const WithMedia = () => (
  <div style={{ maxWidth: 360 }}>
    <Card media={<Orbit />} eyebrow="Step 1" title="Pick a site and a date">
      Eleven sites from Apollo 11 to the Shackleton ridge, any landing date from 1 December 2026 to 30 November 2027.
    </Card>
  </div>
);

export const TextOnly = () => (
  <div style={{ maxWidth: 360 }}>
    <Card eyebrow="Step 3" title="Read the verdict">
      Green, Yellow or Red from a written, adjustable formula, with the days of margin left and the best alternate site.
    </Card>
  </div>
);
