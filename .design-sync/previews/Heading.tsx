import * as React from "react";
import { Heading } from "moonslip-ui";

export const Display = () => <Heading variant="display">MOON SLIP</Heading>;

export const Scale = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <Heading variant="section">Three inputs. One verdict you can defend.</Heading>
    <Heading variant="panel">Verdict on the slipped date</Heading>
    <Heading variant="card">Pick a site and a date</Heading>
    <Heading variant="sidebar">Is my site still survivable?</Heading>
  </div>
);
