import VendorList from "./components/VendorList";

import useGetVendors from "hooks/useGetVendors";
import { incrementPage, useAppDispatch } from "store";

function VendorsPage() {
  //REDUX
  const dispatch = useAppDispatch();

  //FETCH CUSTOM HOOK
  const { vendors, hasNextPage } = useGetVendors();

  return (
    <div style={{ padding: "1rem" }}>
      <VendorList vendors={vendors} />
      <button
        style={{ marginTop: "1rem" }}
        onClick={() => dispatch(incrementPage())}
        disabled={!hasNextPage}
      >
        Load More
      </button>
    </div>
  );
}

export default VendorsPage;
