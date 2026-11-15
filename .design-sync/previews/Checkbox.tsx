import * as React from "react";
import { Checkbox } from "moonslip-ui";

export const States = () => (
  <div style={{ maxWidth: 340 }}>
    <Checkbox label="Comms with Earth required" defaultChecked />
    <Checkbox label="Use real terrain skyline" />
    <Checkbox label="Night survivor (disabled for day landers)" disabled />
  </div>
);
