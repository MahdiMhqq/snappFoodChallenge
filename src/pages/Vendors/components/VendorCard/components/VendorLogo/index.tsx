import React, { useState } from "react";
import clsx from "clsx";

import styles from "./vendorLogo.module.scss";

interface IVendorLogoProps {
  className?: string;
  src: string;
  alt: string;
}

function VendorLogo({ className = "", src, alt }: IVendorLogoProps) {
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
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default React.memo(VendorLogo);
