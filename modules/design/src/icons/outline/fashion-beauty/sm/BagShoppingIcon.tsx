import type { SVGProps } from "react";

export const BagShoppingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m8,9v-4c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v4"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m18.84,22H5.16c-1.165,0-2.083-.992-1.994-2.153l.692-9c.08-1.042.949-1.847,1.994-1.847h12.296c1.045,0,1.914.805,1.994,1.847l.692,9c.089,1.162-.829,2.153-1.994,2.153Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
