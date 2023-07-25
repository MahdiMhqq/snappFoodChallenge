import React from "react";
import clsx from "clsx";

import styles from "./coupon.module.scss";

import icons from "utils/icons";

interface ICouponProps {
  className?: string;
  desc?: string;
  variant?: "default" | "pro" | "cashback";
}

function Coupon({
  className = "",
  desc = "",
  variant = "default",
}: ICouponProps) {
  return (
    <div
      className={clsx(
        styles.coupon,
        variant === "pro" ? styles["coupon-pro"] : styles["coupon-default"],
        className
      )}
    >
      {variant !== "default" &&
        (variant === "pro"
          ? icons.pro(styles.coupon__icon)
          : icons.cashback(styles.coupon__icon))}
      <p className={styles.coupon__desc}>
        {variant === "cashback" ? "جایزه خرید" : desc}
      </p>
    </div>
  );
}

export default Coupon;
