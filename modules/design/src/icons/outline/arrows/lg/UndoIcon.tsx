import type { SVGProps } from "react";

export const UndoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M44 26.9999C38.8464 22.0513 31.787 18.9999 24 18.9999C16.3682 18.9999 9.4353 21.9309 4.31045 26.7063L4.33916 26.6796"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7.5 13.0002L3.87653 26.5231L17.3995 30.1466"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
