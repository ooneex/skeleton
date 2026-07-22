import type { SVGProps } from "react";

export const VectorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14.5 6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 6H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M14.5 7C17.4606 7.85431 20.5 10 20.5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.50004 7C6.53948 7.85431 3.5 10 3.5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 4.61929 1.11929 3.5 2.5 3.5C3.88071 3.5 5 4.61929 5 6C5 7.38071 3.88071 8.5 2.5 8.5C1.11929 8.5 0 7.38071 0 6Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6C19 4.61929 20.1193 3.5 21.5 3.5C22.8807 3.5 24 4.61929 24 6C24 7.38071 22.8807 8.5 21.5 8.5C20.1193 8.5 19 7.38071 19 6Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M14.5 4H9.5V9H14.5V4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 20L6 15L1 15L1 20L6 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 20L23 15L18 15L18 20L23 20Z"
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
