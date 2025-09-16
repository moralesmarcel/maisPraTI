import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
      <div className={`${styles.skeletonText} ${styles.short}`}></div>
      <div className={styles.skeletonBtn}></div>
    </div>
  );
}
