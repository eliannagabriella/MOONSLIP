import * as React from "react";
import { MoonSlipRoot, Label, Heading, Text, Button } from "moonslip-ui";

export const ScreenGround = () => (
  <MoonSlipRoot fullHeight={false} style={{ padding: 40, borderRadius: 16 }}>
    <Label>NASA Space Apps 2026 · Lunar Landing Site Navigator</Label>
    <Heading variant="section" style={{ margin: "16px 0" }}>Your launch slipped. Check the site.</Heading>
    <Text variant="lead" style={{ marginBottom: 24 }}>Every Moon Slip screen sits on this night-sky ground.</Text>
    <Button variant="primary" arrow>Explore landing sites</Button>
  </MoonSlipRoot>
);
