import React from "react";
import clsx from "clsx";

import styles from "./vendorCardLoading.module.scss";

interface IVendorCardLoadingProps {
  className?: string;
}

function VendorCardLoading({ className = "" }: IVendorCardLoadingProps) {
  return (
    <div className={clsx(styles.cardLoading, className)}>
      <div
        className={clsx(
          styles.cardLoading__cover,
          styles.cardLoading__skeleton
        )}
      ></div>
      <div className={styles.cardLoading__descContainer}>
        <div
          className={clsx(
            styles.cardLoading__desc,
            styles.cardLoading__skeleton
          )}
        ></div>
        <div
          className={clsx(
            styles.cardLoading__desc,
            styles.cardLoading__skeleton
          )}
        ></div>
        <div
          className={clsx(
            styles.cardLoading__desc,
            styles.cardLoading__skeleton
          )}
        ></div>
      </div>
    </div>
  );
}

export default VendorCardLoading;
