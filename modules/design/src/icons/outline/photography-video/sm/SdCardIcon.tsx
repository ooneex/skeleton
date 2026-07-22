import type { SVGProps } from "react";

export const SdCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 21V16H8V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 21L18 21C19.1046 21 20 20.1046 20 19L20 5C20 3.89543 19.1046 3 18 3L9.89334 3C9.32485 3 8.78322 3.24193 8.40384 3.66532L4.51049 8.01029C4.18178 8.37714 4 8.85239 4 9.34497L4 19C4 20.1046 4.89543 21 6 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
