import type { SVGProps } from "react";

export const ButterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 20L28.3216 23.3922C28.1346 24.3271 27.3138 25 26.3604 25H5.63961C4.68625 25 3.86542 24.3271 3.67845 23.3922L3 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 7V12.5C16 13.8807 17.1193 15 18.5 15V15C19.8807 15 21 13.8807 21 12.5V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 20V10C4 8.34315 5.34315 7 7 7H25C26.6569 7 28 8.34315 28 10V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M1 20H31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
