import type { SVGProps } from "react";

export const TextSizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 19H28" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3.39221 21H10.6433"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16.0965 25H16L22.2222 6H23H23.7778L30 25H29.9097"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2.09766 25H2L6.44445 12H7H7.55556L12 25H11.8984"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
