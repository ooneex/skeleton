import type { SVGProps } from "react";

export const ChefHatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 20V24V23.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 24H24" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M22.8375 7.02557C23.094 7 23.3442 7 23.6364 7C27.2 7 30 9.97647 30 13.7647C30 17.7812 27 20 24 20.5294V29H8V20.5294C5 20 2 17.7812 2 13.7647C2 9.97647 4.8 7 8.36364 7C8.65579 7 8.90603 7 9.16246 7.02557"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.56 13C9.14 12.1429 9 11.1429 9 10.1429C9 6.14286 12.08 3 16 3C19.92 3 23 6.14286 23 10.1429C23 11.1429 22.86 12.1429 22.44 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
