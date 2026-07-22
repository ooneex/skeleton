import type { SVGProps } from "react";

export const CameraBanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.5 30.5L29.5 19.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M45 36L45 16C45 13.2386 42.7614 11 40 11L34.5 11L30 5L18 5L13.5 11L8 11C5.23857 11 3 13.2386 3 16L3 36C3 38.7614 5.23858 41 8 41L40 41C42.7614 41 45 38.7614 45 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 33C28.4183 33 32 29.4183 32 25C32 20.5817 28.4183 17 24 17C19.5817 17 16 20.5817 16 25C16 29.4183 19.5817 33 24 33Z"
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
