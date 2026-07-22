import type { SVGProps } from "react";

export const TextOverlineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 17H16" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M6.69144 21H6.5L11.3889 7H12H12.6111L17.5 21H17.2916"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
