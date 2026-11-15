import * as React from "react";
import { Container, Label, Heading, Text } from "moonslip-ui";

export const PageColumn = () => (
  <Container style={{ outline: "1px dashed rgba(200,221,245,.25)", paddingTop: 24, paddingBottom: 24 }}>
    <Label>01 / Our purpose</Label>
    <Heading variant="section" style={{ margin: "16px 0 16px" }}>A few days of delay can turn a good landing site into a dark one.</Heading>
    <Text>Content sits in a centred 1240px column with a responsive side gutter.</Text>
  </Container>
);
