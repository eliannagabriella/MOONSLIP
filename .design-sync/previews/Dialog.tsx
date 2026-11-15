import * as React from "react";
import { Dialog, DataTable, CodeBlock, Text } from "moonslip-ui";

export const FullData = () => (
  <Dialog inline open eyebrow="Full data" title="Validation, terrain checks and data format">
    <h3>Terrain check: our height map against published values</h3>
    <DataTable
      columns={[
        { key: "site", header: "Site", align: "left" },
        { key: "ours", header: "Ours" },
        { key: "ref", header: "Reference" },
        { key: "d", header: "Difference" },
      ]}
      rows={[
        { site: "IM-1 Odysseus", ours: "2,585 m", ref: "2,579 m", d: "+6 m" },
        { site: "IM-2 Athena", ours: "5,324 m", ref: "5,321 m", d: "+3 m" },
      ]}
    />
    <h3>Data contract v1.0</h3>
    <CodeBlock>{`{ "meta": { "contract":"1.0", "step_hours":1, "n_steps":8760 } }`}</CodeBlock>
    <Text variant="small">All angles in degrees. lat north-positive, lon east-positive.</Text>
  </Dialog>
);
