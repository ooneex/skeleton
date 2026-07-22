import type { SVGProps } from "react";

export const CheckboxChecked2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m23,3H6c-1.657,0-3,1.343-3,3v20c0,1.657,1.343,3,3,3h20c1.657,0,3-1.343,3-3V10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <polyline
        points="9 14 15 20 30 2"
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
