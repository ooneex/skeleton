import type { SVGProps } from "react";

export const GolfFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 13C18.0751 13 23 15.0147 23 17.5C23 19.9853 18.0751 22 12 22C5.92487 22 1 19.9853 1 17.5C1 16.3042 2.14015 15.2173 4 14.4114"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8 16.5V3L14.5 6L8.05469 9.22266L8.07656 9.21172"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 17C11 17.5523 9.88071 18 8.5 18C7.11929 18 6 17.5523 6 17C6 16.4477 7.11929 16 8.5 16C9.88071 16 11 16.4477 11 17Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
