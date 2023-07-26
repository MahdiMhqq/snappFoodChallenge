import clsx from "clsx";

import styles from "./error.module.scss";

interface IErrorProps {
  className?: string;
  error: string;
}

function Error({ className = "", error }: IErrorProps) {
  return (
    <p className={clsx(styles.error, className)}>
      {typeof error === "string"
        ? error
        : "مشکلی در ارتباط با سرور پیش آمده است. لطفا در صورت فعال بودن VPN آن را قطع کرده مجددا تلاش کنید."}
    </p>
  );
}

export default Error;
