import type { SVGProps } from "react";

export const ChessKingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17.8889 18L20.5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6.11111 18L3.5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11.5 5L9 12.5L4.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12.5 5L15 12.5L19.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18.5 18H5.5C4.67157 18 4 18.6716 4 19.5V22H20V19.5C20 18.6716 19.3284 18 18.5 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="3"
        rx="2"
        ry="2"
        transform="rotate(90 12 3)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <ellipse
        cx="21"
        cy="6"
        rx="2"
        ry="2"
        transform="rotate(90 21 6)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <ellipse
        cx="3"
        cy="6"
        rx="2"
        ry="2"
        transform="rotate(90 3 6)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
