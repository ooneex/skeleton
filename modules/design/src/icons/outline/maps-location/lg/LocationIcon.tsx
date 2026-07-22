import type { SVGProps } from "react";

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M38.2046 31H41.0714L45 45H3L6.92857 31H9.80469"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 16.9638C10 28.2928 24 39 24 39C24 39 38 28.3194 38 16.9638C38 8.06125 30.8244 3 24 3C17.1756 3 10 8.06125 10 16.9638Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="24"
        cy="17"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
