import React from "react";
import VendorCard from "./components/VendorCard";

import VendorCardLoading from "./components/VendorCardLoading";
import TextCard from "./components/TextCard";
import { IVendor } from "types";

const sampleVendor = {
  id: 95685,
  vendorCode: "p8djvy",
  noOrder: false,
  title: "کافه نلی",
  description: "صبحانه و میان‌وعده ,نوشیدنی سرد و بستنی ,نوشیدنی گرم ,صبحانه",
  rate: 4.8,
  rating: 9.5162479061977,
  logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/61a5dfa16dffa.jpg",
  defLogo:
    "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/61a5dfa16dffa.jpg",
  taxEnabled: false,
  taxIncluded: false,
  taxEnabledInProducts: false,
  taxEnabledInPackaging: false,
  taxEnabledInDeliveryFee: false,
  tax: 0,
  serviceFee: 0,
  deliveryArea: "",
  discount: 0,
  isOpen: true,
  minDeliveryFee: 0,
  maxDeliveryFee: 0,
  deliveryTime: 0,
  paymentTypes: [1, 2, 5],
  schedules: [
    {
      type: 0,
      weekday: 1,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
    {
      type: 0,
      weekday: 2,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
    {
      type: 0,
      weekday: 3,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
    {
      type: 0,
      weekday: 4,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
    {
      type: 0,
      weekday: 5,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
    {
      type: 0,
      weekday: 6,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
    {
      type: 0,
      weekday: 7,
      allDay: false,
      startHour: "07:30",
      stopHour: "22:15",
    },
  ],
  minOrder: 50000,
  address:
    "شریعتی، بالاتر از مترو قلهک، رو به روی بانک مسکن،  پلاک1522، کافه نلی",
  phone: "09359750587",
  website: "",
  status: 1,
  lat: 35.77398,
  lon: 51.437275,
  restaurantClass: "",
  foodTypes: [],
  restaurantTypes: [],
  isFavorite: false,
  priority: 1000,
  city: "تهران",
  area: "حسن آباد-زرگنده",
  commentCount: 5790,
  recommendedFor: "",
  establishment: "CAFE",
  mostPopularItems: "",
  costsForTwo: 163500,
  onlineOrder: true,
  voteCount: 5790,
  discountType: null,
  menuUrl:
    "https://snappfood.ir/restaurant/menu/p8djvy/neli?superTypeAlias=RESTAURANT",
  discountValue: 0,
  discountForAll: false,
  containerFee: 0,
  deliveryGuarantee: false,
  badges: [
    {
      title: "ارسال با اسنپ فود",
      description:
        "سفارش شما از این رستوران با اسنپ‌اکسپرس، سریع‌تر به دست شما می‌رسد",
      image:
        "https://static.zoodfood.com/bundles/bodofoodfrontend/images/vendor/express-badge-png.png",
      white_image:
        "https://static.zoodfood.com/bundles/bodofoodfrontend/images/vendor/header/express.png",
    },
  ],
  discountStartHour1: "",
  discountStopHour1: "",
  discountStartHour2: "",
  discountStopHour2: "",
  discountValueForView: 25,
  coverPath: "",
  cuisinesArray: [
    {
      id: 4,
      title: "پیتزا",
    },
    {
      id: 8,
      title: "ساندویچ",
    },
    {
      id: 9,
      title: "برگر",
    },
    {
      id: 11,
      title: "فست فود",
    },
    {
      id: 15,
      title: "سوخاری",
    },
    {
      id: 16,
      title: "پاستا",
    },
    {
      id: 24,
      title: "سوپ",
    },
    {
      id: 25,
      title: "صبحانه",
    },
    {
      id: 35,
      title: "کافی شاپ",
    },
    {
      id: 36,
      title: "سالاد",
    },
    {
      id: 41,
      title: "بستنی",
    },
  ],
  preOrderEnabled: false,
  preorderToday: {
    weekday: "",
    name: "",
    startHour: "",
    intervals: null,
  },
  vendorType: "RESTAURANT",
  childType: "RESTAURANT",
  budgetClass: "مناسب",
  vendorTypeTitle: "رستوران",
  isZFExpress: true,
  deliveryFee: 22000,
  backgroundImage:
    "https://cdn.snappfood.ir/uploads/images/vendor-cover-app-review/25/07.jpg",
  backgroundImageCustom:
    "https://cdn.snappfood.ir/w.x.h/uploads/images/vendor-cover-app-review/25/07.jpg",
  has_coupon: true,
  coupon_count: 4,
  best_coupon: "10٪ تخفیف با خرید حداقل 1 هزار تومان",
  is_pro: true,
  has_first_coupon: true,
  userImage: [
    {
      id: 7753635,
      description: null,
      fileName:
        "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/6199f36224a8c.jpg",
      thumbNailSource:
        "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/6199f36224a8c.jpg",
      likeCount: 0,
      commentCount: 0,
      timeDifference: 0,
      imageType: "PRODUCT_IMAGE",
      userType: "ZOODFOOD",
    },
    {
      id: 7753636,
      description: null,
      fileName:
        "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/6199f3623669a.jpg",
      thumbNailSource:
        "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/6199f3623669a.jpg",
      likeCount: 0,
      commentCount: 0,
      timeDifference: 0,
      imageType: "PRODUCT_IMAGE",
      userType: "ZOODFOOD",
    },
    {
      id: 7753637,
      description: null,
      fileName:
        "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/6199f3623feb7.jpg",
      thumbNailSource:
        "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/6199f3623feb7.jpg",
      likeCount: 0,
      commentCount: 0,
      timeDifference: 0,
      imageType: "PRODUCT_IMAGE",
      userType: "ZOODFOOD",
    },
    {
      id: 7753638,
      description: null,
      fileName:
        "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/6199f36249ed5.jpg",
      thumbNailSource:
        "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/6199f36249ed5.jpg",
      likeCount: 0,
      commentCount: 0,
      timeDifference: 0,
      imageType: "PRODUCT_IMAGE",
      userType: "ZOODFOOD",
    },
  ],
  menuImage: [],
  countReview: 5790,
  countOfUserImages: 218,
  deliveryFeeDiscount: 0,
  trendingScore: -1,
  delay: "",
  deliver: true,
  eta: 30,
  min_eta: -1,
  max_eta: -1,
  open_at_eta: false,
  action: "",
  has_delay: false,
  delay_time: 0,
  total_time: 0,
  bid: true,
  superTypeAlias: "RESTAURANT",
  is_food_party: false,
  is_market_party: false,
  click_id: "pack_Kw0BnV",
  cpc_campaign_hash: null,
  cpc_spot: null,
  is_ecommerce: false,
  is_economical: false,
  is_grocery_vip: false,
  is_grocery_returnable: false,
  is_grocery_economic: false,
  status_title: "ACTIVE",
  status_text: "",
  status_description: "",
  has_cashback: true,
  new_type: "RESTAURANT",
  new_type_title: "رستوران",
};

function VendorsPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <VendorCard vendor={sampleVendor satisfies IVendor} />
      <VendorCardLoading />
      <TextCard data="140 رستوران باز " />
    </div>
  );
}

export default VendorsPage;
