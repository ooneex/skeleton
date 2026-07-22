import type { SVGProps } from "react";

export const BagShoppingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m3.848,25.325l2.152-9.325v-7h20v7l2.152,9.325c.434,1.88-.994,3.675-2.923,3.675H6.771c-1.929,0-3.357-1.795-2.923-3.675Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m11,13v-7c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
