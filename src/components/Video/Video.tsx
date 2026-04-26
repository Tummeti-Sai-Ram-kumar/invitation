import type { FC, ReactElement } from "react";

import videoSource from '../../assets/video.mp4';

import styles from "./Video.module.css";

export const Video: FC = (): ReactElement => {
  return (
    <div className={styles.video}>
      <p className={styles.video__title}>
        Take a look at our pre wedding video
      </p>
      <video controls className={styles.video__player}>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};
