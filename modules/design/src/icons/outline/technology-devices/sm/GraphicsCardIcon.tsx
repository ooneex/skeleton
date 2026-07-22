import type { SVGProps } from "react";

export const GraphicsCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 17V19H19V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 17L20 17C21.1046 17 22 16.1046 22 15L22 7C22 5.89543 21.1046 5 20 5L3 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 19L3 2L0.999999 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8.5 13C9.60457 13 10.5 12.1046 10.5 11C10.5 9.89543 9.60457 9 8.5 9C7.39543 9 6.5 9.89543 6.5 11C6.5 12.1046 7.39543 13 8.5 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.5 13C17.6046 13 18.5 12.1046 18.5 11C18.5 9.89543 17.6046 9 16.5 9C15.3954 9 14.5 9.89543 14.5 11C14.5 12.1046 15.3954 13 16.5 13Z"
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
