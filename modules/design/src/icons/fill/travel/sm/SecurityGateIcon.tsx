import type { SVGProps } from "react";

export const SecurityGateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="22 23 20 23 20 3 4 3 4 23 2 23 2 1 22 1 22 23"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="12" cy="6.5" r="2.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m16.07,12.156c-.131-.522-.464-.974-.912-1.236-2.064-1.217-4.248-1.218-6.314-.001-.45.264-.783.715-.913,1.237l-1.096,4.381,2.195,1.098.269,5.367h5.402l.269-5.367,2.195-1.098-1.095-4.38Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
