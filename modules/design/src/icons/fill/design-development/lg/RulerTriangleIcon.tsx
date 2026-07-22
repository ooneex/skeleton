import type { SVGProps } from "react";

export const RulerTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.58569L45.4142 43.9999H4V2.58569ZM6 13V10H8.91422V13H6ZM6 18.5V15.5H10.9142V18.5H6ZM6 24V21H8.91422V24H6ZM6 29.5V26.5H10.9142V29.5H6ZM6 35V32H8.91422V35H6ZM10.9142 37.5H6V40.5H10.9142V37.5ZM14 26V34H22L14 26Z"
        fill="currentColor"
      />
    </svg>
  );
};
