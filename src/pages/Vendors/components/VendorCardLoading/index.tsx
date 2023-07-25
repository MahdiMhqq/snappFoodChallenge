import React from "react";
import clsx from "clsx";

import styles from "./vendorCardLoading.module.scss";

interface IVendorCardLoadingProps {
  className?: string;
}

const VendorCardLoading = React.forwardRef<
  HTMLDivElement,
  IVendorCardLoadingProps
>(({ className = "" }, ref) => {
  return (
    <div className={clsx(styles.cardLoading, className)} ref={ref}>
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
});

VendorCardLoading.displayName = "VendorCardLoading";

export default VendorCardLoading;
