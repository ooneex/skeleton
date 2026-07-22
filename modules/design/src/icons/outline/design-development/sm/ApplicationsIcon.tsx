import type { SVGProps } from "react";

export const ApplicationsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m2,13h16v6.5c0,.828-.672,1.5-1.5,1.5H3.5c-.828,0-1.5-.672-1.5-1.5V6.5c0-.828.672-1.5,1.5-1.5h6.5v16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m22,9V2.5c0-.828-.672-1.5-1.5-1.5h-6.5v8h8Z"
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
