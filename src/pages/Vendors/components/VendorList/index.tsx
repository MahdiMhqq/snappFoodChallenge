import clsx from "clsx";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";

import styles from "./vendorList.module.scss";

import VendorCardLoading from "../VendorCardLoading";
import VirtualRow from "./VirtualRow";

import { getItemSize } from "./services";

import type { IVendorCardData } from "types";

interface IVendorListProps {
  vendors: IVendorCardData[];
  loading?: boolean;
}

function VendorList({ vendors, loading = false }: IVendorListProps) {
  return (
    <div className={styles.vendorList}>
      {loading && vendors.length === 0 ? (
        [...new Array(10)].map((_, index) => (
          <VendorCardLoading
            key={index}
            className={styles.vendorList__loadingCard}
          />
        ))
      ) : (
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => (
            <List
              width={width}
              height={height}
              itemCount={vendors.length + 1}
              direction="rtl"
              itemSize={(index) => getItemSize(index, vendors)}
              itemData={vendors}
            >
              {VirtualRow}
            </List>
          )}
        </AutoSizer>
      )}
    </div>
  );
}

export default VendorList;
