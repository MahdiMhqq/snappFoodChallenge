import { useEffect } from "react";

import { fetchVendors, useAppDispatch, useAppSelector } from "store";

function useGetVendors({ skip = false }: { skip?: boolean }) {
  //REDUX
  const dispatch = useAppDispatch();
  const { err, hasNextPage, loading, vendors, page, lat, long } =
    useAppSelector((store) => store.vendors);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    if (dispatch && !skip) {
      dispatch(fetchVendors({ page }));
    }
    // eslint-disable-next-line
  }, [page, skip, lat, long]);

  return { err, hasNextPage, loading, vendors };
}

export default useGetVendors;
