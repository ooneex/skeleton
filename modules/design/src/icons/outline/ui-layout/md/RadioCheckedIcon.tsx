import type { SVGProps } from "react";

export const RadioCheckedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
    </svg>
  );
};
