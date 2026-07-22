import type { SVGProps } from "react";

export const HotspotIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22.035,28.618c4.707-2.256,7.965-7.05,7.965-12.618,0-7.732-6.268-14-14-14S2,8.268,2,16c0,5.568,3.259,10.362,7.965,12.618"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m12.552,23.21c-2.69-1.289-4.552-4.029-4.552-7.21,0-4.418,3.582-8,8-8s8,3.582,8,8c0,3.182-1.862,5.921-4.552,7.21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle
        cx="16"
        cy="16"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
