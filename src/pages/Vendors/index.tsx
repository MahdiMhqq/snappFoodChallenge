import { useEffect } from "react";

import VendorList from "./components/VendorList";

import useGeolocation from "hooks/useGeoLocation";
import useGetVendors from "hooks/useGetVendors";

import { incrementPage, updateGeoLocation, useAppDispatch } from "store";
import InfiniteScrollBottomCard from "./components/InfiniteScrollBottomCard";

function VendorsPage() {
  //GEO LOCATION
  const { lat, long, loading: geoLoading } = useGeolocation();

  //REDUX
  const dispatch = useAppDispatch();

  //FETCH CUSTOM HOOK
  const {
    vendors,
    hasNextPage,
    loading: fetchLoading,
  } = useGetVendors({ skip: geoLoading });

  //VARIABLES
  const loading = geoLoading || fetchLoading;

  //LIFE CYCLE METHODS
  useEffect(() => {
    if (!geoLoading) {
      dispatch(
        updateGeoLocation({ lat: lat ?? undefined, long: long ?? undefined })
      );
    }
  }, [lat, long, geoLoading]);

  return (
    <div style={{ padding: "1rem" }}>
      <VendorList
        vendors={vendors}
        loading={loading}
        hasNextPage={hasNextPage}
      />
      {/* <button
        style={{ marginTop: "1rem" }}
        onClick={() => }
        disabled={!hasNextPage}
      >
        Load More
      </button> */}
    </div>
  );
}

export default VendorsPage;
