import type { SVGProps } from "react";

export const RoadPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16.5 23.5L11 43L11.2941 42" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M31.5 23.5L37 43L36.7059 42" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M37.5 12L40 12C42.7614 12 45 14.2386 45 17L45 38C45 40.7614 42.7614 43 40 43L8 43C5.23858 43 3 40.7614 3 38L3 17C3 14.2386 5.23858 12 8 12L10.5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M24 43L24 39" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 34.1712V33" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 28.02V28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 23C28.947 19.6031 32.5 15.7364 32.5 11.2051C32.5 6.67385 28.6941 3 24 3C19.3059 3 15.5 6.67385 15.5 11.2051C15.5 15.7364 19.053 19.6031 24 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 13C24.8284 13 25.5 12.3284 25.5 11.5C25.5 10.6716 24.8284 10 24 10C23.1716 10 22.5 10.6716 22.5 11.5C22.5 12.3284 23.1716 13 24 13Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
