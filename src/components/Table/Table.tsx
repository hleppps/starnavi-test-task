import { FC } from "react";
import { ModeField } from "../../types";
import TableRow from "./TableRow";
import styles from "./Table.module.scss";

interface TableProps {
  size: ModeField;
}

const Table: FC<TableProps> = ({ size }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {Array.from({ length: size }).map((_item, idx) => (
          <TableRow key={`row-${idx}`} rowIdx={idx} size={size} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
