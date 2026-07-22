import type { SVGProps } from "react";

export const VectorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 8L26 8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M19 9.00012C22.9474 10.1392 27 13.3334 27 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 9C9.05259 10.1391 5 13.3333 5 19.9999"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8C1 6.61929 2.11929 5.5 3.5 5.5C4.88071 5.5 6 6.61929 6 8C6 9.38071 4.88071 10.5 3.5 10.5C2.11929 10.5 1 9.38071 1 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 8C26 6.61929 27.1193 5.5 28.5 5.5C29.8807 5.5 31 6.61929 31 8C31 9.38071 29.8807 10.5 28.5 10.5C27.1193 10.5 26 9.38071 26 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 5H13V11H19V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 26L8 20L2 20L2 26L8 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 26L30 20L24 20L24 26L30 26Z"
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
