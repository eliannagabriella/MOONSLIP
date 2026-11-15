import * as React from "react";
import { Text } from "moonslip-ui";

export const Variants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Text variant="lead">My launch slipped N days. Is my landing site still survivable?</Text>
    <Text variant="body">Every number in the planner comes from one data file written by a Google Colab notebook.</Text>
    <Text variant="small">Ours: NASA LOLA LDEM_75S_120M at 120 m per pixel.</Text>
    <Text variant="error">Could not read data.json: missing "sites" array.</Text>
  </div>
);
