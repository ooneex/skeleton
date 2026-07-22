import type { SVGProps } from "react";

export const CircleComposeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20.692,2.823c-1.469-.523-3.044-.823-4.692-.823-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14c0-1.648-.3-3.223-.823-4.692"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="30"
        y1="2"
        x2="15"
        y2="17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
