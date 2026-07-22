import type { SVGProps } from "react";

export const Compass4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 5L16 16L5 19L8 8L19 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 22V21.99" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 2V2.01" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 12L2.01 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 12L21.99 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};
