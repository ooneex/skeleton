import type { SVGProps } from "react";

export const BasketShoppingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="4.592"
        y="4.5"
        width="10.817"
        height="2"
        transform="translate(-.123 10.77) rotate(-56.31)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect
        x="21"
        y=".092"
        width="2"
        height="10.817"
        transform="translate(.644 13.127) rotate(-33.69)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m2.795,17l.939,9.398c.205,2.053,1.917,3.602,3.98,3.602h16.57c2.063,0,3.775-1.549,3.98-3.602l.939-9.398H2.795Zm9.205,9h-2v-6h2v6Zm5,0h-2v-6h2v6Zm5,0h-2v-6h2v6Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="1" y="9" width="30" height="6" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
