import * as React from "react";
import { Inset, Label, Text, Button } from "moonslip-ui";

export const ResultSummary = () => (
  <Inset style={{ maxWidth: 360 }}>
    <Label variant="key">Result</Label>
    <div className="ms-big">18 of 18</div>
    <Text variant="small">Every value within the 0.05° target against JPL Horizons.</Text>
    <Button variant="primary" arrow>View full validation data</Button>
  </Inset>
);
