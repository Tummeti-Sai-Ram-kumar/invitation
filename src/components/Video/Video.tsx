import type { FC, ReactElement } from "react";
import { lazy, Suspense } from "react";

import styles from "./Video.module.css";

const LazyGallery = lazy(() => import("./Gallery"));

export const Video: FC = (): ReactElement => {
  return (
    <div className={styles.video}>
      <p className={styles.video__title}>Gallery</p>
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading gallery...</div>}>
        <LazyGallery />
      </Suspense>
    </div>
  );
};
