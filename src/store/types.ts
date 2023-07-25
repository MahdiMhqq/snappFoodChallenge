import { IVendorCardData } from "types";

export interface IVendorStore {
  vendors: IVendorCardData[];
  page: number;
  page_size: number;
  lat: number;
  long: number;
  loading: boolean;
  err: string | null;
  hasNextPage: boolean;
}
