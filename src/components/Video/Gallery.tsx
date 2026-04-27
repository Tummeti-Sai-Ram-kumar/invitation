import type { FC, ReactElement } from "react";

import videoSource1 from "../../assets/video1.mp4";
import videoSource2 from "../../assets/video2.mp4";
import imageSource1 from "../../assets/image1.jpeg";
import imageSource2 from "../../assets/image2.jpeg";
import imageSource3 from "../../assets/image3.jpeg";
import imageSource4 from "../../assets/image4.jpeg";

import styles from "./Video.module.css";

const Gallery: FC = (): ReactElement => (
    <div className={styles.video__container}>
        <img src={imageSource1} className={styles.video__image} />
        <img src={imageSource2} className={styles.video__image} />
        <video controls className={styles.video__player} poster={imageSource3}>
          <source src={videoSource1} type="video/mp4" />
        </video>
        <video controls className={styles.video__player} poster={imageSource4}>
          <source src={videoSource2} type="video/mp4" />
        </video>
      </div>    
)

export default Gallery;