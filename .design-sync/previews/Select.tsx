import * as React from "react";
import { Select } from "moonslip-ui";

export const LanderType = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 300 }}>
    <Select
      aria-label="Lander type"
      options={[
        { value: "day", label: "Day lander (cannot survive night)" },
        { value: "night", label: "Night survivor" },
        { value: "custom", label: "Custom" },
      ]}
    />
    <Select aria-label="Calendar length" defaultValue="60" options={[{ value: "30", label: "30 days" }, { value: "60", label: "60 days" }, { value: "90", label: "90 days" }]} />
  </div>
);
