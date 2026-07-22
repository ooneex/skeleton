import type { SVGProps } from "react";

export const AlertInfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m13,22h-2v-12h-3v-2h3c1.103,0,2,.897,2,2v12Z" strokeWidth="0" fill="currentColor" />
      <circle cx="12" cy="3.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
