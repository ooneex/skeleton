import type { SVGProps } from "react";

export const PowerOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 12V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 5.08807C25.1311 6.98409 28 11.157 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 11.157 6.86894 6.98409 11 5.08807"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
