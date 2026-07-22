import type { SVGProps } from "react";

export const SockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 9H35" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M35 24L32.6964 23.7657C27.6865 23.2563 24.3156 28.7726 27.0545 32.9983L29 36"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.5 30L22.5 43.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 24L16 3H35L35 27.5938C35 29.1382 34.4046 30.623 33.3375 31.7395L22.552 43.0241C18.975 46.7667 13.0042 46.7868 9.40196 43.0685C5.88994 39.4432 5.9883 33.6554 9.62146 30.1515L16 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
