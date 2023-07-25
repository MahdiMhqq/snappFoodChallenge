import { useEffect } from "react";

import { fetchVendors, useAppDispatch, useAppSelector } from "store";

function useGetVendors() {
  //REDUX
  const dispatch = useAppDispatch();
  const { err, hasNextPage, loading, vendors, page } = useAppSelector(
    (store) => store.vendors
  );

  //LIFE CYCLE HOOKS
  useEffect(() => {
    if (dispatch) {
      dispatch(fetchVendors({ page }));
    }
    // eslint-disable-next-line
  }, [page]);

  return { err, hasNextPage, loading, vendors };
}

export default useGetVendors;
