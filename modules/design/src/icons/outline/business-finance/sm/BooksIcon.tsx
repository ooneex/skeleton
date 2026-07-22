import type { SVGProps } from "react";

export const BooksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="3" y="3" width="7" height="18" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M6.5 7V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 17L3 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <rect
        x="11"
        y="3.81174"
        width="7"
        height="18"
        transform="rotate(-15 11 3.81174)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M15.416 6.76956L16.4513 10.6333"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21.3849 15.5229L14.6235 17.3347"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
