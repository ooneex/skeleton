import type { SVGProps } from "react";

export const DropletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 29.0968C8 18.1944 24 4 24 4C24 4 40 18.164 40 29.0968C40 39.2358 31.7993 45 24 45C16.2007 45 8 39.2358 8 29.0968Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 39C18.4772 39 14 34.5228 14 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
