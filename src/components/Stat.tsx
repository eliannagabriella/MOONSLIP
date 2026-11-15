import * as React from "react";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure, e.g. "8,760". */
  value: React.ReactNode;
  /** Mono unit after the figure, e.g. "H", "SITES", "DEG". */
  unit?: React.ReactNode;
  /** Plain-language caption under the figure. */
  caption?: React.ReactNode;
}

/** One headline figure (light Inter, 40-64px, tabular) with a mono unit and a caption. Use inside StatGrid. */
export function Stat({ value, unit, caption, className, ...rest }: StatProps) {
  return (
    <div className={className} {...rest}>
      <div className="ms-num">
        {value}
        {unit && <small>{unit}</small>}
      </div>
      {caption && <span className="ms-stat__caption">{caption}</span>}
    </div>
  );
}
