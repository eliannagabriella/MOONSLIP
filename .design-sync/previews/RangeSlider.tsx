import * as React from "react";
import { RangeSlider, ValueDisplay } from "moonslip-ui";

export const SlipSlider = () => (
  <div className="ms-field" style={{ maxWidth: 300 }}>
    <ValueDisplay label="Launch slip" value={18} unit="DAYS" />
    <RangeSlider min={0} max={60} defaultValue={18} aria-label="Launch slip slider" />
  </div>
);
