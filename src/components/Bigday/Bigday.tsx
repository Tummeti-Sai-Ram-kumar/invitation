import type { FC, ReactElement } from "react";

import { Countdown } from "../Countdown/Countdown";

import styles from "./Bigday.module.css";


export const Bigday: FC = (): ReactElement => {
  return (
    <section className={styles.bigday}>
      <article className={styles.bigday__details}>
        <div className={styles.bigday__date}>
          <p>Save the Date</p>
          <p>1st May 2026</p>
        </div>
        <div className={styles.bigday__muhurtham}>
          <p>Muhurtham</p>
          <p>10:15 AM</p>
        </div>
        <div className={styles.bigday__venue}>
          <p>Venue</p>
          <p>MRC Convention, Kurnool, Andhra Pradesh</p>
        </div>
      </article>
      <Countdown />
    </section>
  );
};
