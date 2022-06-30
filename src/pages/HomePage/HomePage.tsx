import { FC, useState } from "react";
import Information from "../../components/Information";
import Settings from "../../components/Settings";
import Table from "../../components/Table";
import { DEFAULT_TABLE_DIMENSION } from "../../constants";
import { ModeField, Modes } from "../../types";
import styles from "./HomePage.module.scss";

const HomePage: FC<{ modes: Modes }> = ({ modes }) => {
  const [selectedMode, setSelectedMode] = useState<ModeField>(0);

  return (
    <div className={styles.root}>
      <section className={styles.section}>
        <Settings
          options={modes}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
        <Table size={selectedMode || DEFAULT_TABLE_DIMENSION} />
      </section>
      <section className={styles.section}>
        <Information />
      </section>
    </div>
  );
};

export default HomePage;
