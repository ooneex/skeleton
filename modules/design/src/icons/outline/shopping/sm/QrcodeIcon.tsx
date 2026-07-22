import type { SVGProps } from "react";

export const QrcodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M14 14H18M19 14V19H21M19 14H21M19 14H18M18 14V16H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 18V21H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6.5 6.5H6.51" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6.5 17.5H6.51" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17.49 6.5H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
