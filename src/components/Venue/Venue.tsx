import type { FC, ReactElement } from "react";
import { useCallback } from "react";

import { Location } from "./Location";

import styles from "./Venue.module.css";

export const Venue: FC = (): ReactElement => {
  const handleClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/MRC+Convention+Center/@15.830441,78.037659,17z/data=!3m1!4b1!4m5!3m4!1s0x3bbf8c9e7a2c8d9:0x6e5b8c9e7a2c8d9!8m2!3d15.830441!4d78.0398477",
      "_blank"
    );
  }, []);

  return (
    <div className={styles.venue}>
      <p className={styles.venue__title}>Venue</p>
      <section className={styles.venue__details}>
        <div className={styles.venue__info}>
          <p className={styles.venue__address}>
            MRC Convention, Kurnool, Andhra Pradesh
          </p>
          <button className={styles.venue__button} onClick={handleClick}>
            Get Directions <span><Location /></span>
          </button>
        </div>
        <iframe
          className={styles.venue__map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.216958675786!2d78.02141307513119!3d15.845190384802294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e74a4e83616d%3A0x96018e645c32e89f!2sMRC%20convention!5e0!3m2!1sen!2sin!4v1777214026898!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};
