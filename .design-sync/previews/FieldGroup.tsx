import * as React from "react";
import { FieldGroup, Field, Select, Input } from "moonslip-ui";

export const PlanGroup = () => (
  <div style={{ maxWidth: 300 }}>
    <FieldGroup label="Your plan">
      <Field label="Landing site">
        <Select options={[{ value: "im2", label: "IM-2 Athena (Mons Mouton)" }]} />
      </Field>
      <Field label="Planned landing date (00:00 UTC)">
        <Input type="date" defaultValue="2026-12-16" />
      </Field>
    </FieldGroup>
  </div>
);
