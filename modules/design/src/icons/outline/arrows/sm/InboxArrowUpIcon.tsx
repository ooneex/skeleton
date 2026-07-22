import type { SVGProps } from "react";

export const InboxArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6.2 4L5.4 4C4.46458 4 3.65411 4.64838 3.44878 5.56098L2.04878 11.7832C2.01636 11.9273 2 12.0745 2 12.2222L2 18C2 19.1046 2.89543 20 4 20L20 20C21.1046 20 22 19.1046 22 18L22 12.2222C22 12.0745 21.9836 11.9273 21.9512 11.7832L20.5512 5.56098C20.3459 4.64837 19.5354 4 18.6 4L17.8 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 13H8V16H16V13H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M12 11L12 3L12 3.50005"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.5 6.5L12 3L15.5 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
