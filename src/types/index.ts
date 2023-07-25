export interface IVendor {
  id: number;
  
  logo: string;
  backgroundImage: string;

  rate: number;
  voteCount: number;
  rating: number;

  title: string;
  description: string;
  best_coupon: string | null;
  is_pro: boolean;
  menuUrl: string;

  deliver: boolean;
  deliveryFee: number;
  isZFExpress: boolean;

  discountValueForView: number;

  has_cashback: boolean;

  cpc_campaign_hash: string | null;

  eta: number | null;
}

export type IVendorCardData =
  | { type: "TEXT"; data: string }
  | {
      type: "BANNER";
      data: { image: string; deepLink: string };
    }
  | { type: "VENDOR"; data: IVendor };

export interface IRequestResult<T> {
  data: T;
  render_type: number;
  status: boolean;
}

export interface IPagedVendorList {
  count: number;
  extra_sections: any;
  finalResult: IVendorCardData[];
  meta_tags: {
    title: string;
    header: string;
    description: string;
  };
  open_count: number;
}

export type TVendorListRequestResult = IRequestResult<IPagedVendorList>;
