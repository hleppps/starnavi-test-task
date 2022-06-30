import { FC, useContext } from "react";
import SquaresContext from "../../../store/squaresContext";
import styles from "./TableCell.module.scss";

interface TableCellProps {
  rowIdx: number;
  cellIdx: number;
}

const TableCell: FC<TableCellProps> = ({ rowIdx, cellIdx }) => {
  const { selectedSquares, selectSquare, refuseSquare } =
    useContext(SquaresContext);
  const squareKey = [rowIdx, cellIdx].toString();
  const selected = selectedSquares[squareKey];

  const hoverHandler = () => {
    selected ? refuseSquare(rowIdx, cellIdx) : selectSquare(rowIdx, cellIdx);
  };

  const tableStyles = `${styles.cell} ${selected && styles.selected}`;

  return <td className={tableStyles} onMouseEnter={hoverHandler} />;
};

export default TableCell;
