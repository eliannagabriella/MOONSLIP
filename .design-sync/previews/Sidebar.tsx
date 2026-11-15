import * as React from "react";
import { Sidebar, FieldGroup, Field, Select, Input, ValueDisplay, RangeSlider, Checkbox, Button, Text } from "moonslip-ui";

export const PlannerInputs = () => (
  <div style={{ maxWidth: 340 }}>
    <Sidebar eyebrow="Slip-Recovery Planner" title="Is my site still survivable?" intro="Pick a site and date, enter the slip, read the verdict.">
      <FieldGroup label="Your plan">
        <Field label="Landing site">
          <Select
            defaultValue="im2"
            options={[
              { value: "im2", label: "IM-2 Athena (Mons Mouton)" },
              { value: "im1", label: "IM-1 Odysseus (Malapert A)" },
              { value: "shk", label: "Shackleton ridge, point A" },
            ]}
          />
        </Field>
        <Field label="Planned landing date (00:00 UTC)">
          <Input type="date" defaultValue="2026-12-16" />
        </Field>
        <div className="ms-field">
          <ValueDisplay label="Launch slip" value={12} unit="DAYS" />
          <RangeSlider min={0} max={60} defaultValue={12} aria-label="Launch slip slider" />
        </div>
      </FieldGroup>
      <FieldGroup label="Verdict formula">
        <Field label="Lander type">
          <Select options={[{ value: "day", label: "Day lander (cannot survive night)" }, { value: "night", label: "Night survivor" }]} />
        </Field>
        <Checkbox label="Comms with Earth required" defaultChecked />
      </FieldGroup>
      <FieldGroup label="Data">
        <Button variant="ghost" size="sm">Load data.json</Button>
        <Text variant="small">Real data is built into this page. Load a newer data.json to replace it.</Text>
      </FieldGroup>
    </Sidebar>
  </div>
);
