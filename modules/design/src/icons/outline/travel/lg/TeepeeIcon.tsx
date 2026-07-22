import type { SVGProps } from "react";

export const TeepeeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 22L21 25L24 22L27 25L30 22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M15 43H16.125L24 30L31.875 43H33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M29 4L5 43H43L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
