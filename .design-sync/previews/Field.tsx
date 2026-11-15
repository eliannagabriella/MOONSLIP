import * as React from "react";
import { Field, Select, Input } from "moonslip-ui";

export const WithSelect = () => (
  <div style={{ maxWidth: 300 }}>
    <Field label="Landing site">
      <Select options={[{ value: "a11", label: "Apollo 11" }, { value: "im1", label: "IM-1 Odysseus (Malapert A)" }]} />
    </Field>
  </div>
);

export const WithHint = () => (
  <div style={{ maxWidth: 300 }}>
    <Field label="Mission length" hint="Days on the surface after landing">
      <Input type="number" defaultValue={10} min={1} />
    </Field>
  </div>
);
