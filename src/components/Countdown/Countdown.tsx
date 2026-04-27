import type { FC, ReactElement } from "react";
import { useLayoutEffect, useState } from "react";

import styles from "./Countdown.module.css";

const TARGET_DATE = "2026-05-01T10:15:00";

export const Countdown: FC = (): ReactElement => {
  const targetTime = new Date(TARGET_DATE).getTime();
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useLayoutEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const timeDifference = targetTime - currentTime > 0 ? targetTime - currentTime : 0;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdown__item}>
        <p>{daysLeft.toString().padStart(2, "0")}</p>
        <p>Days</p>
      </div>
      <div className={styles.countdown__item}>
        <p>{hoursLeft.toString().padStart(2, "0")}</p>
        <p>Hours</p>
      </div>
      <div className={styles.countdown__item}>
        <p>{minutesLeft.toString().padStart(2, "0")}</p>
        <p>Minutes</p>
      </div>
      <div className={styles.countdown__item}>
        <p className={styles.countdown__second}>{secondsLeft.toString().padStart(2, "0")}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};
