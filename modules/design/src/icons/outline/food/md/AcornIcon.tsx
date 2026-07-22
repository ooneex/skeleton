import type { SVGProps } from "react";

export const AcornIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 6V4C16 2.34315 17.3431 1 19 1V1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4 13H28V11C28 8.23858 25.7614 6 23 6H9C6.23858 6 4 8.23858 4 11V13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 17V20.375C7 25.875 14 30 16 30C18 30 25 25.875 25 20.375V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 19.8174C11 21.576 12.3714 23.0736 13.718 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
