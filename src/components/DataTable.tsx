import * as React from "react";
import { cx } from "../cx";

export interface DataTableColumn {
  key: string;
  header: React.ReactNode;
  /** Text columns read better left-aligned; numbers default to right. */
  align?: "left" | "right";
}

export interface DataTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: DataTableColumn[];
  rows: Array<Record<string, React.ReactNode>>;
  /** Wrap in a horizontal scroller (default true). */
  scroll?: boolean;
}

/** Mono, tabular-number data table with hairline rows and hover tint: validation and comparison data. */
export function DataTable({ columns, rows, scroll = true, className, ...rest }: DataTableProps) {
  const table = (
    <table className={cx("ms-table", className)} {...rest}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} data-align={c.align}>
              {c.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c.key} data-align={c.align}>
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return scroll ? <div className="ms-scroll">{table}</div> : table;
}
