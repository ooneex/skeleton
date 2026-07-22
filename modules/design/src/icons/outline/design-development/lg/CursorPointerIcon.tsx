import type { SVGProps } from "react";

export const CursorPointerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.7674 25.9333V6.60465C13.7674 4.61385 15.3813 3 17.3721 3V3C19.3629 3 20.9767 4.61386 20.9767 6.60465V16.9999L33.2412 20.4477C36.5574 21.38 38.7024 24.5864 38.2984 28.0074L36.2918 45H15.8046V41L9.18716 33.1994C8.42072 32.2959 8 31.1496 8 29.9649L8 24.6C8 21.8386 10.2386 19.6 13 19.6H13.5149"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 30V34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 30V34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
