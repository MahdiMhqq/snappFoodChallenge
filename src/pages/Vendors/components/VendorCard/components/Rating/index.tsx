import React from "react";
import clsx from "clsx";

import styles from "./rating.module.scss";

import icons from "utils/icons";

import type { IVendor } from "types";

interface IRatingProps {
  className?: string;
  vendor: IVendor;
}

const starColor = (rate: number) => {
  let rateRounded = Math.floor(rate * 10) - (Math.floor(rate * 10) % 5);
  rateRounded = rateRounded < 10 ? 10 : rateRounded;

  return `var(--star-${rateRounded})`;
};

function Rating({ className = "", vendor }: IRatingProps) {
  return (
    <div className={clsx(styles.rating, className)}>
      <p className={styles.rating__votes}>({vendor.voteCount})</p>
      <div
        style={{ color: starColor(vendor.rate) }}
        className={styles.rating__star}
      >
        <div className={styles.rating__bg}></div>
        <span className={styles.rating__rate}>
          {vendor.rating ? vendor.rate : "جدید"}
        </span>
        {vendor.rating ? icons.star() : null}
      </div>
    </div>
  );
}

export default Rating;
