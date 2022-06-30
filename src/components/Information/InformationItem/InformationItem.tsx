import { FC } from "react";
import styles from "./InformationItem.module.scss";

interface InformationItemProps {
  row: number;
  col: number;
}

const InformationItem: FC<InformationItemProps> = ({ row, col }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        row {row} col {col}
      </p>
    </div>
  );
};

export default InformationItem;
