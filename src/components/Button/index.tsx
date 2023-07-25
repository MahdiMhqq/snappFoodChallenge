import React, { HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

export interface IBasicButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "className"> {
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IBasicButtonProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <button {...rest} className={clsx(styles.button, className)} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
