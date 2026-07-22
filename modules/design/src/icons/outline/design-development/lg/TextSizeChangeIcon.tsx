import type { SVGProps } from "react";

export const TextSizeChangeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M23 43L23 13H34V5H4V13H15L15 43H23Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M33 26L39 20L45 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 35L39 41L33 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
