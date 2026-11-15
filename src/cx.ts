/** Join class names, skipping falsy values. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Mission verdict used by VerdictPill and VerdictCell. */
export type Verdict = "go" | "caution" | "nogo" | "nodata";

export const verdictClass: Record<Verdict, string> = {
  go: "ms-v--go",
  caution: "ms-v--caution",
  nogo: "ms-v--nogo",
  nodata: "ms-v--nodata",
};
