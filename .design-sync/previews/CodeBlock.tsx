import * as React from "react";
import { CodeBlock } from "moonslip-ui";

export const DataContract = () => (
  <CodeBlock>{`{ "meta": { "contract":"1.0", "source":"text", "frame":"MOON_ME",
    "start_utc":"2026-12-01T00:00:00Z", "step_hours":1, "n_steps":8760 },
  "sites": [ { "id":"a11", "name":"Apollo 11", "lat":0.67, "lon":23.47,
      "sun_el":[..], "sun_az":[..], "earth_el":[..], "earth_az":[..] } ] }`}</CodeBlock>
);
