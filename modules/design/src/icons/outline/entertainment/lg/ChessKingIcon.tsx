import type { SVGProps } from "react";

export const ChessKingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11.5 33H36.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M35.5 38L41 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M12.5 38L7 15" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M24.5 9L30 23.0001L40 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M23.5 9L18 23.0001L8 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 9C22.067 9 20.5 7.433 20.5 5.5C20.5 3.567 22.067 2 24 2C25.933 2 27.5 3.567 27.5 5.5C27.5 7.433 25.933 9 24 9Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <ellipse
        cx="5.5"
        cy="11.5"
        rx="3.5"
        ry="3.5"
        transform="rotate(90 5.5 11.5)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <ellipse
        cx="42.5"
        cy="11.5"
        rx="3.5"
        ry="3.5"
        transform="rotate(90 42.5 11.5)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M37 38H11C8.79086 38 7 39.7909 7 42V45H41V42C41 39.7909 39.2091 38 37 38Z"
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
