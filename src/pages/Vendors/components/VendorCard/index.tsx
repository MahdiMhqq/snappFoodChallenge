import React from "react";
import clsx from "clsx";

import styles from "./vendorCard.module.scss";

import VendorLogo from "./components/VendorLogo";
import VendorCover from "./components/VendorCover";
import Rating from "./components/Rating";

import icons from "utils/icons";

import type { IVendor } from "types";

interface IVendorCardProps {
  className?: string;
  vendor: IVendor;
}

function VendorCard({ className = "", vendor }: IVendorCardProps) {
  return (
    <section className={clsx(styles.vendorCard, className)}>
      {/* If there was an internal page for vendor menu, there was Link tag instead of anchor */}
      <a href={vendor.menuUrl} target="_blank" rel="noreferrer">
        <VendorCover className={styles.vendorCover} vendor={vendor} />
        <div className={styles.vendorCard__descSection}>
          <VendorLogo
            className={styles.vendorCard__logo}
            alt={vendor.title}
            src={vendor.logo}
          />
          <div className={styles.vendorCard__title}>
            <h6 className={styles.vendorCard__vendorTitle}>
              {vendor.title}
              {vendor.discountValueForView && (
                <span className={styles.vendorCard__discount}>
                  تا {vendor.discountValueForView}٪
                </span>
              )}
            </h6>
            <Rating vendor={vendor} />
          </div>
          <div className={styles.vendorCard__desc}>
            {vendor.description.replace(/[,]/g, " ")}
          </div>
          <div className={styles.vendorCard__delivery}>
            <p className={styles.vendorCard__bike}>
              <span>{vendor.isZFExpress ? "اسنپ اکسپرس" : "پیک فروشنده"}</span>
              <span className={styles.vendorCard__fee}>
                {vendor.deliveryFee.toLocaleString()} تومان
              </span>
            </p>
            {vendor.eta && vendor?.eta > 0 && (
              <div className={styles.vendorCard__eta}>
                <span>تا {vendor.eta} دقیقه</span>
                {icons.eta()}
              </div>
            )}
          </div>
        </div>
      </a>
    </section>
  );
}

export default VendorCard;
