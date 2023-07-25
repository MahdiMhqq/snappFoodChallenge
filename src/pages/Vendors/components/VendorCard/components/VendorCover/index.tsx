import React, { useState } from "react";
import clsx from "clsx";

import styles from "./vendorCover.module.scss";

import CouponContainer from "./CouponContainer";

import type { IVendor } from "types";

interface IVendorCoverProps {
  className?: string;
  vendor: IVendor;
}

function VendorCover({ className = "", vendor }: IVendorCoverProps) {
  //STATES
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.card__container}>
        <img
          className={clsx(
            styles.card__img,
            loaded && styles["card__img-loaded"]
          )}
          src={vendor.backgroundImage}
          alt={vendor.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <CouponContainer vendor={vendor} />
      </div>
    </div>
  );
}

export default VendorCover;
