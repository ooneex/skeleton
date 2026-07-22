import type { SVGProps } from "react";

export const TextSizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13.5 15H20.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 17H7" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M12.174 19H12L16.4444 5H17.5556L22 19H21.8106"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2.10442 19H2L4.66667 11H5.33333L8 19H7.88635"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
