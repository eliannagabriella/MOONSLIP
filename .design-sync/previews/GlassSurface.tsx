import * as React from "react";
import { GlassSurface, Label, Text } from "moonslip-ui";

export const Frosted = () => (
  <GlassSurface style={{ maxWidth: 420 }}>
    <Label>Mission note</Label>
    <Text variant="small" style={{ marginTop: 8 }}>
      Near the lunar south pole the Sun grazes the horizon and Earth dips in and out of view.
    </Text>
  </GlassSurface>
);
