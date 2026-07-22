import type { SVGProps } from "react";

export const ZoomInIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 2L3 16" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M25 39.3308V44L25.2499 44.0532C31.2848 45.3367 37.5221 45.3367 43.5569 44.0532L43.8069 44L45.5816 27.328C45.8808 24.3489 43.9379 21.6053 41.0286 20.8982L29.1034 18V6C29.1034 4.34315 27.7603 3 26.1034 3C24.4466 3 23.1034 4.34315 23.1034 6V27L17.558 23.6453C16.1603 22.8829 14.409 23.4321 13.697 24.8562C13.1363 25.9775 13.3858 27.3346 14.3087 28.1832L24.0305 37.1224C24.6484 37.6905 25 38.4914 25 39.3308Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10.0001 2.0033L17 2.0033L16.9999 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10.0001 15.9967L3.00012 15.9967L3.00006 9"
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
