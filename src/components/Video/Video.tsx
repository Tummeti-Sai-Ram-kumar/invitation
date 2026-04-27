import type { FC, ReactElement } from "react";

import videoSource1 from "../../assets/video1.mp4";
import videoSource2 from "../../assets/video2.mp4";

import styles from "./Video.module.css";

export const Video: FC = (): ReactElement => {
  return (
    <div className={styles.video}>
      <p className={styles.video__title}>Video Gallery</p>
      <div className={styles.video__container}>
        <video controls className={styles.video__player}>
          <source src={videoSource1} type="video/mp4" />
        </video>
        <video controls className={styles.video__player}>
          <source src={videoSource2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
