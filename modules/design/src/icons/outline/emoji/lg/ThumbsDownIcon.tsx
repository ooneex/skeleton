import type { SVGProps } from "react";

export const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 30V6" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M20.116 43.5224L15.2915 30L5.00001 30L5.00001 6.99998L32.1206 4.37542C34.4013 4.15471 36.5402 5.51256 37.3109 7.67046L44.0911 26.6546C45.0215 29.2596 43.0903 32 40.3242 32L27 32L27.3598 42.1361C27.4347 44.2475 25.7433 46 23.6306 46C22.0531 46 20.6461 45.0081 20.116 43.5224Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
