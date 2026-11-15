import * as React from "react";
import { FloatingNav, Button } from "moonslip-ui";

export const Home = () => (
  <FloatingNav
    links={[{ label: "Purpose" }, { label: "How it works" }, { label: "Terrain" }, { label: "Data" }]}
    action={<Button variant="primary" size="sm" arrow>Explore landing sites</Button>}
  />
);

export const PlannerScrolled = () => (
  <FloatingNav
    scrolled
    links={[{ label: "Verdict", active: true }, { label: "Calendar" }, { label: "Chart" }, { label: "Validation" }, { label: "Compare" }]}
    action={<Button variant="primary" size="sm">Overview</Button>}
  />
);
