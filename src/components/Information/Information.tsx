import { FC, useContext } from "react";
import SquaresContext from "../../store/squaresContext";
import InformationItem from "./InformationItem";

const Information: FC = () => {
  const { selectedSquares } = useContext(SquaresContext);
  const selectedSquaresKeys = Object.keys(selectedSquares);

  const informationItemsMap = selectedSquaresKeys.map((key) => {
    const [row, col] = key.split(",").map(Number);
    return <InformationItem key={key} row={row + 1} col={col + 1} />;
  });

  return <div>{informationItemsMap}</div>;
};

export default Information;
