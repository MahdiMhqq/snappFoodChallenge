import { useEffect, useRef } from "react";

import VendorCardLoading from "../VendorCardLoading";

import { incrementPage, useAppDispatch } from "store";

interface IInfiniteScrollBottomCardProps {
  className?: string;
}

function InfiniteScrollBottomCard({
  className = "",
}: IInfiniteScrollBottomCardProps) {
  //REDUX
  const dispatch = useAppDispatch();

  //REFS
  const bottomCardRef = useRef<HTMLDivElement>(null);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const bottomCardEntry = entries[0];
      if (bottomCardEntry.isIntersecting) {
        dispatch(incrementPage());
      }
    });
    bottomCardRef.current && observer.observe(bottomCardRef.current);

    return () => {
      bottomCardRef.current && observer.unobserve(bottomCardRef.current);
    };
  }, [bottomCardRef]);

  return <VendorCardLoading className={className} ref={bottomCardRef} />;
}

export default InfiniteScrollBottomCard;
