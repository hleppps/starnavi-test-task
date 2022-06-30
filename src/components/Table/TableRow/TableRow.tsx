import { FC } from "react";
import { ModeField } from "../../../types";
import TableCell from "../TableCell";

interface TableRowProps {
  size: ModeField;
  rowIdx: number;
}

const TableRow: FC<TableRowProps> = ({ size, rowIdx }) => {
  return (
    <tr>
      {Array.from({ length: size }).map((_item, idx) => (
        <TableCell key={`cell-${idx}`} rowIdx={rowIdx} cellIdx={idx} />
      ))}
    </tr>
  );
};

export default TableRow;
