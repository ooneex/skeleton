import type { SVGProps } from "react";

export const HandbagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 18V8C18 4.68629 20.6863 2 24 2V2C27.3137 2 30 4.68629 30 8V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.38462 12L6.12873 35.0197C5.53271 39.2337 8.80382 43 13.0597 43H34.9403C39.1962 43 42.4673 39.2337 41.8713 35.0197L38.6154 12H24H9.38462Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
