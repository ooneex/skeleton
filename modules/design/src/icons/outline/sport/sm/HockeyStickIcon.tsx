import type { SVGProps } from "react";

export const HockeyStickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 7.5V9C22 10.1046 20.433 11 18.5 11C16.567 11 15 10.1046 15 9V7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 15.5L15.8651 21"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5.0038 3.05441L3.28587 4.04626C2.84005 4.30365 2.66248 4.85744 2.8755 5.32609L9.46708 19.8276C9.79162 20.5416 10.5035 21 11.2878 21L20 21C21.1046 21 22 20.1046 22 19L22 16.796C22 15.9184 21.2498 15.2283 20.3753 15.3012L12 16L6.41671 3.51227C6.17466 2.97091 5.51736 2.7579 5.0038 3.05441Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18.5 9.5C20.433 9.5 22 8.60457 22 7.5C22 6.39543 20.433 5.5 18.5 5.5C16.567 5.5 15 6.39543 15 7.5C15 8.60457 16.567 9.5 18.5 9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
