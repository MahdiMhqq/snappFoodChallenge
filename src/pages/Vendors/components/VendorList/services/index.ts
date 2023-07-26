import { IVendorCardData } from "types";

const itemSizes = [
  { type: "VENDOR", height: 248 },
  { type: "TEXT", height: 68 },
];

export const getItemSize = (index: number, vendors: IVendorCardData[]) => {
  const vendorData: IVendorCardData | undefined = vendors[index];
  const vendorType = vendorData?.type ?? "VENDOR";

  const vendorTypeHeight = itemSizes.find(
    (itemSize) => itemSize.type === vendorType
  )?.height;

  return vendorTypeHeight ?? 240;
};
