import { useEffect } from "react";

import VendorList from "./components/VendorList";

import useGeolocation from "hooks/useGeoLocation";
import useGetVendors from "hooks/useGetVendors";

import { updateGeoLocation, useAppDispatch } from "store";

function VendorsPage() {
  //GEO LOCATION
  const { lat, long, loading: geoLoading } = useGeolocation();

  //REDUX
  const dispatch = useAppDispatch();

  //FETCH CUSTOM HOOK
  const { vendors, loading: fetchLoading } = useGetVendors({
    skip: geoLoading,
  });

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
    <main>
      <VendorList vendors={vendors} loading={loading} />
      {/* <button
        style={{ marginTop: "1rem" }}
        onClick={() => }
        disabled={!hasNextPage}
      >
        Load More
      </button> */}
    </main>
  );
}

export default VendorsPage;
