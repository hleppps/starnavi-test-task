import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import SquaresContext from "../../store/squaresContext";
import { ModeField, Modes } from "../../types";
import Button from "../Button";
import Select from "../Select";
import styles from "./Settings.module.scss";

interface SettingsProps {
  options: Modes;
  selectedMode: ModeField;
  setSelectedMode: Dispatch<SetStateAction<ModeField>>;
}

const Settings: FC<SettingsProps> = ({
  options,
  selectedMode,
  setSelectedMode,
}) => {
  const [chosenSelectValue, setChosenSelectValue] = useState(selectedMode);
  const { refuseAllSquares } = useContext(SquaresContext);

  const clickHandler = () => {
    refuseAllSquares();
    setSelectedMode(chosenSelectValue);
  };

  return (
    <div className={styles.container}>
      <Select
        options={options}
        value={chosenSelectValue}
        setValue={setChosenSelectValue}
      />
      <Button onClick={clickHandler}>Start</Button>
    </div>
  );
};

export default Settings;
