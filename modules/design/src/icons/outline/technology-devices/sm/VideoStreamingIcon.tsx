import type { SVGProps } from "react";

export const VideoStreamingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9.5 11L16.5 15L9.5 19V11Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M4.5 8L4 8C2.89543 8 2 8.89543 2 10L2 20C2 21.1046 2.89543 22 4 22L20 22C21.1046 22 22 21.1046 22 20L22 10C22 8.89543 21.1046 8 20 8L19.5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8.46447 6.46446C10.4171 4.51184 13.5829 4.51184 15.5355 6.46446"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5.63604 3.63603C9.15076 0.121306 14.8492 0.121306 18.364 3.63603"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
