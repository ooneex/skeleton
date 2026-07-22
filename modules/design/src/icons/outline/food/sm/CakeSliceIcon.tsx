import type { SVGProps } from "react";

export const CakeSliceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.0282 15.0986L1.99997 15.5L2.2768 15.4861"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 11L12.9501 10.4525C13.5212 10.4239 14 10.8794 14 11.4512V13.5C14 14.6046 14.8954 15.5 16 15.5V15.5C17.1046 15.5 18 14.6046 18 13.5V11.1512C18 10.6184 18.4179 10.1791 18.9501 10.1525L22 10"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2 20L22 19L22 10C22 7 19.5 4.5 15 3.5L2 11L2 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
