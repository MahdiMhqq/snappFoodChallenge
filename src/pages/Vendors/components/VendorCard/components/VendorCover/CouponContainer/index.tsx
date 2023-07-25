import React from "react";
import clsx from "clsx";

import styles from "./couponContainer.module.scss";

import Coupon from "../Coupon";

import icons from "utils/icons";

import type { IVendor } from "types";

interface ICouponContainerProps {
  className?: string;
  vendor: IVendor;
}

interface ICouponArr {
  variant: "pro" | "default" | "cashback";
  desc?: string;
}

const couponArrCreator = (vendor: IVendor) => {
  const coupons: ICouponArr[] = [];
  if (vendor.is_pro || !!vendor.best_coupon)
    coupons.push({
      variant: vendor.is_pro ? "pro" : "default",
      desc: vendor.best_coupon ?? undefined,
    });
  if (vendor.has_cashback)
    coupons.push({ variant: "cashback", desc: undefined });

  return coupons;
};

function CouponContainer({ className = "", vendor }: ICouponContainerProps) {
  //VARIABLES
  const hasAd = !!vendor?.cpc_campaign_hash;
  const coupons = couponArrCreator(vendor);

  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={clsx(
          styles.container__coupons,
          hasAd && styles["container__coupons-small"]
        )}
      >
        {coupons.map((coupon, index) => (
          <Coupon key={index} variant={coupon.variant} desc={coupon.desc} />
        ))}
      </div>
      {hasAd && (
        <div className={styles.container__ad}>
          <span className={styles["container__ad-chip"]}>
            <span>آگهی</span>
            {icons.ad()}
          </span>
        </div>
      )}
    </div>
  );
}

export default CouponContainer;
