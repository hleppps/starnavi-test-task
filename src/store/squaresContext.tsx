import { createContext, FC, ReactNode, useState } from "react";

interface SelectedSquaresInterface {
  [key: string]: boolean;
}

interface SquaresContextInterface {
  selectedSquares: SelectedSquaresInterface;
  selectSquare: (row: number, cell: number) => void;
  refuseSquare: (row: number, cell: number) => void;
  refuseAllSquares: () => void;
}

const defaultState = {
  selectedSquares: {},
  selectSquare: () => {},
  refuseSquare: () => {},
  refuseAllSquares: () => {},
};

const SquaresContext = createContext<SquaresContextInterface>(defaultState);

export const SquaresContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSquares, setSelectedSquares] =
    useState<SelectedSquaresInterface>({});

  const selectSquareHandler = (row: number, cell: number) => {
    setSelectedSquares((prevSquares) => ({
      ...prevSquares,
      [[row, cell].toString()]: true,
    }));
  };

  const refuseSquareHandler = (row: number, cell: number) => {
    setSelectedSquares((prevSquares) => {
      const {[[row, cell].toString()]: _refusedSquare, ...newSquares} = prevSquares
      return newSquares
    });
  };

  const refuseAllSquaresHandler = () => {
    setSelectedSquares({});
  };

  const contextValue = {
    selectedSquares,
    selectSquare: selectSquareHandler,
    refuseSquare: refuseSquareHandler,
    refuseAllSquares: refuseAllSquaresHandler,
  };

  return (
    <SquaresContext.Provider value={contextValue}>
      {children}
    </SquaresContext.Provider>
  );
};

export default SquaresContext;
