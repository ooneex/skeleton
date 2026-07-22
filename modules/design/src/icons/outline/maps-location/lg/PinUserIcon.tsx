import type { SVGProps } from "react";

export const PinUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 19.2911C8 32.5082 24 45 24 45C24 45 40 32.5393 40 19.2911C40 8.90479 31.7993 3 24 3C16.2007 3 8 8.90479 8 19.2911Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 17C26.2091 17 28 15.2091 28 13C28 10.7909 26.2091 9 24 9C21.7909 9 20 10.7909 20 13C20 15.2091 21.7909 17 24 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 21C19.3059 21 15.5 24.1841 15.5 28.1113C21.1663 29.2962 26.8337 29.2962 32.5 28.1113C32.5 24.1841 28.6941 21 24 21Z"
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
