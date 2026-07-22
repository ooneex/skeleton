import type { SVGProps } from "react";

export const Star2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="16 2.5 20.224 11.057 29.67 12.43 22.835 19.092 24.448 28.5 16 24.06 7.552 28.5 9.165 19.092 2.33 12.43 11.776 11.057 16 2.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
