import { Dispatch, FC, SetStateAction } from "react";
import { ModeField, Modes } from "../../types";
import styles from "./Select.module.scss";

export interface SelectProps {
  options: Modes;
  value: ModeField;
  setValue: Dispatch<SetStateAction<ModeField>>;
}

const Select: FC<SelectProps> = ({ options, value, setValue }) => {
  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(+event.target.value);
  };

  return (
    <select value={value} onChange={selectHandler} className={styles.select}>
      <option value={0} disabled>
        Pick mode
      </option>
      {options.map((option) => (
        <option key={option.field} value={option.field}>{option.name}</option>
      ))}
    </select>
  );
};

export default Select;
