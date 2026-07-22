import type { SVGProps } from "react";

export const MediaLibraryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 21L6 21C3.23858 21 0.999999 18.7614 1 16L1 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 15L23 5C23 3.89543 22.1046 3 21 3L7 3C5.89543 3 5 3.89543 5 5L5 15C5 16.1046 5.89543 17 7 17L21 17C22.1046 17 23 16.1046 23 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 7L17 10L12 13V7Z"
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
