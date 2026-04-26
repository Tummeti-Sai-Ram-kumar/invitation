import type { FC, ReactElement } from "react";

import styles from "./Timeline.module.css";

const EVENTS_TIMELINE = [
  { event: "Mehandi", date: "29th April", time: "5:00 PM" },
  { event: "Haldi", date: "30th April", time: "7:00 AM" },
  { event: "Reception", date: "30th April", time: "7:00 PM" },
];

export const Timeline: FC = (): ReactElement => {
  return (
    <div className={styles.timeline}>
      <p className={styles.timeline__title}>Events</p>
      <section className={styles.timeline__events}>
        {EVENTS_TIMELINE.map(({ event, date, time }, index) => {
          return (
            <div key={index} className={styles.timeline__event}>
              <p>{event}</p>
              <p>
                {date} {time}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
