import type { FC, ReactElement } from "react";

import styles from "./Dev.module.css";

export const Dev: FC = (): ReactElement => {
  return (
    <section className={styles.dev}>
      <p className={styles.dev__content}><span>💕</span>Made for your special day <span>💕</span></p>
    </section>
  );
};
