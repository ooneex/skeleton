import type { SVGProps } from "react";

export const ShopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m4,13v7c0,1.105.895,2,2,2h12c1.105,0,2-.895,2-2v-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <polyline
        points="10 22 10 16 14 16 14 22"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <path
        d="m21.874,7l-2.874-5H5l-2.874,5c.444,1.725,2.01,3,3.874,3,1.202,0,2.267-.541,3-1.38.733.839,1.798,1.38,3,1.38s2.267-.541,3-1.38c.733.839,1.798,1.38,3,1.38,1.864,0,3.43-1.275,3.874-3Z"
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
