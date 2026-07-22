import type { SVGProps } from "react";

export const Flag7Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 15H43.5L39 25.5L43.5 36H21V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 7H28V28H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 45V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
