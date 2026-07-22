import type { SVGProps } from "react";

export const PlaneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11.6594 19L38.9412 19C42.8397 19 46 22.1603 46 26.0588C46 27.6832 44.6832 29 43.0588 29L30 29L20.9633 42.9021C20.4672 43.6654 19.5183 43.9973 18.6546 43.7097L16 42.8258L21 29L10.9408 29C9.19122 29 7.64469 27.863 7.12284 26.1931L3 13L7.15166 13L11.6594 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19.1918 14L16 5.17419L18.6546 4.29028C19.5183 4.0027 20.4672 4.33463 20.9633 5.09786L26.7499 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M37 24H37.02" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M31 24H31.02" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M25 24H25.02" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M19 24H19.02" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
