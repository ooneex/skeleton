import type { SVGProps } from "react";

export const PalletPackageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 2V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 7L6 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10 20V21H14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M1 16H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M19 20V21H23V15L21.74 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 20V21H1V15L2.26 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <rect
        x="6"
        y="2"
        width="12"
        height="10"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
