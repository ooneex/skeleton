import type { SVGProps } from "react";

export const WindmillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 23L11.5 15H12.5L14 23H10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 8V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13.732 11L19.7942 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4.20577 14.5L10.2679 11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
