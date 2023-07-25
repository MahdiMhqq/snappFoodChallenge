import clsx from "clsx";

import TextCard from "../TextCard";
import VendorCard from "../VendorCard";
import VendorCardLoading from "../VendorCardLoading";
import InfiniteScrollBottomCard from "../InfiniteScrollBottomCard";

import type { IVendorCardData } from "types";

interface IVendorListProps {
  className?: string;
  vendors: IVendorCardData[];
  loading?: boolean;
  hasNextPage?: boolean;
}

function VendorList({
  className = "",
  vendors,
  loading = false,
  hasNextPage = true,
}: IVendorListProps) {
  return (
    <div
      className={clsx(className)}
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem 0" }}
    >
      {loading && vendors.length === 0 ? (
        [...new Array(10)].map((_, index) => <VendorCardLoading key={index} />)
      ) : (
        <>
          {vendors?.map((vendor) =>
            vendor?.type === "TEXT" ? (
              <TextCard data={vendor.data} key={vendor.data} />
            ) : vendor.type === "VENDOR" ? (
              <VendorCard key={vendor.data.id} vendor={vendor.data} />
            ) : null
          )}
          {hasNextPage && <InfiniteScrollBottomCard />}
        </>
      )}
    </div>
  );
}

export default VendorList;
