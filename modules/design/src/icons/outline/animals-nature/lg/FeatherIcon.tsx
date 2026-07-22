import type { SVGProps } from "react";

export const FeatherIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 22L6 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30.8362 26.9331L40.0882 20.649C41.2423 16.5014 41.9051 11.6198 42 6C16.0093 6.43541 5.71765 18.9953 11.6135 36.3879C22.5875 40.1084 31.633 37.3759 36.9274 28.3286L30.8362 26.9331Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
