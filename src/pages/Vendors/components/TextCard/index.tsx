import React from "react";
import clsx from "clsx";

import styles from "./textCard.module.scss";

interface ITextCardProps {
  className?: string;
  data: string;
}

function TextCard({ className = "", data }: ITextCardProps) {
  return (
    <div className={clsx(styles.textCard, className)}>
      <h6 className={styles.textCard__title}>{data}</h6>
    </div>
  );
}

export default React.memo(TextCard);
