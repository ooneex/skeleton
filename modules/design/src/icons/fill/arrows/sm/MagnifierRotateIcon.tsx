import type { SVGProps } from "react";

export const MagnifierRotateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="16.75"
        y="12.861"
        width="2"
        height="9.778"
        transform="translate(-7.352 17.75) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m15.5,2v2.211c-1.466-1.391-3.42-2.211-5.5-2.211-3.955,0-7.359,2.948-7.919,6.858l-.142.99,1.98.283.142-.99c.419-2.931,2.972-5.142,5.938-5.142,1.723,0,3.332.748,4.457,2h-2.957v2h6V2h-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m16.08,9.869l-.142.99c-.419,2.931-2.972,5.142-5.938,5.142-1.723,0-3.332-.748-4.457-2h2.957v-2H2.5v6h2v-2.211c1.466,1.391,3.42,2.211,5.5,2.211,3.955,0,7.359-2.948,7.919-6.858l.142-.99-1.98-.283Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
