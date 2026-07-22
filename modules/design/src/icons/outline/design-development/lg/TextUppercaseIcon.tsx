import type { SVGProps } from "react";

export const TextUppercaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M38 26H44V38H39C31.268 38 25 31.732 25 24V24C25 16.268 31.268 10 39 10H42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6 29H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3.09376 38H3L12.375 10H13H13.625L23 38H22.9069"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
