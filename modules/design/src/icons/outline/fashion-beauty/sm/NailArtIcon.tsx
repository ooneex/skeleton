import type { SVGProps } from "react";

export const NailArtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 22L5 11.1056C5 8.853 6.12577 6.74949 8 5.5V5.5V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 22L19 11.1056C19 8.853 17.8742 6.74949 16 5.5V5.5V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M10 20H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 3.079C9.21463 2.37235 10.5948 2.00006 12 2C13.4052 2.00006 14.7854 2.37235 16 3.079V10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10V3.079Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
