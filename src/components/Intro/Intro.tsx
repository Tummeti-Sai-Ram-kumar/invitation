import type { FC, ReactElement } from "react";

import styles from "./Intro.module.css";

export const Intro: FC = (): ReactElement => {
  return (
    <div className={styles.intro}>
      <p>Wedding Invitation</p>
      <p>
        We cordially invite your gracious presence with family and friends on the
        occasion of our wedding ceremony
      </p>
      <p>Shaily & Kundan</p>
    </div>
  );
};

