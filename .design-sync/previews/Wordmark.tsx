import * as React from "react";
import { Wordmark } from "moonslip-ui";

// The wordmark sizes off the viewport (13.5vw) to span a full-width footer;
// inside a narrower container, cap it with fontSize so it isn't clipped.
export const FooterSignOff = () => <Wordmark style={{ fontSize: "clamp(48px, 10vw, 180px)" }} />;
