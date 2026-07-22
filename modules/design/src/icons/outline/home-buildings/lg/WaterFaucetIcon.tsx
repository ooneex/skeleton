import type { SVGProps } from "react";

export const WaterFaucetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M43 23V27H36V23" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M5 15V5H29V9L16 10V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M38 15H5V43L19 43V35C19 28.3726 24.3726 23 31 23L43 23V20C43 17.2386 40.7614 15 38 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
