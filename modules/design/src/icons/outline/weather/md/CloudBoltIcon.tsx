import type { SVGProps } from "react";

export const CloudBoltIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.6 17L13 23H16H19L15.4 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 27H25.5C28.538 27 31 24.538 31 21.5C31 18.622 28.789 16.265 25.974 16.024C25.983 15.849 26 15.677 26 15.5C26 9.701 21.299 5 15.5 5C9.753 5 5.091 9.619 5.008 15.346C2.675 16.168 1 18.386 1 21C1 24.314 3.686 27 7 27H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
