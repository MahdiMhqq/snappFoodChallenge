import { ListChildComponentProps } from "react-window";
import clsx from "clsx";

import styles from "./virtualRow.module.scss";

import TextCard from "../../TextCard";
import VendorCard from "../../VendorCard";
import VendorCardLoading from "../../VendorCardLoading";
import InfiniteScrollBottomCard from "../../InfiniteScrollBottomCard";

import { useAppSelector } from "store";

import type { IVendorCardData } from "types";

interface IVirtualRowProps extends ListChildComponentProps<IVendorCardData[]> {
  className?: string;
}

const VirtualRow = ({
  data,
  index,
  style,
  isScrolling,
  className,
}: IVirtualRowProps) => {
  //REDUX
  const { hasNextPage } = useAppSelector((store) => store.vendors);

  //VARIABLES
  const vendor = data[index];
  const isLastVendor = index === data.length;

  //CONTENT
  const vendorVariousTypeCard =
    typeof vendor === "object" && !isScrolling ? (
      vendor?.type === "TEXT" ? (
        <TextCard data={vendor.data} key={vendor.data} />
      ) : vendor.type === "VENDOR" ? (
        <VendorCard key={vendor.data.id} vendor={vendor.data} />
      ) : null
    ) : (
      <VendorCardLoading />
    );

  return (
    <div
      style={style}
      className={clsx(styles.virtualRowCard, className)}
      key={index}
    >
      {isLastVendor
        ? hasNextPage && <InfiniteScrollBottomCard />
        : vendorVariousTypeCard}
    </div>
  );
};

export default VirtualRow;
