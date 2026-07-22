import type { SVGProps } from "react";

export const MatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.25 28L27 28C28.6569 28 30 26.6569 30 25L30 9C30 7.34315 28.6568 6 27 6L11 6L11.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 24L11 23.5C11 21.0147 8.98528 19 6.5 19V19C4.01472 19 2 21.0147 2 23.5V23.5C2 25.9853 4.01472 28 6.5 28L16 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 24L2.00001 6.49995C2.00001 4.01467 4.01472 1.99995 6.5 1.99995V1.99995C8.98528 1.99995 11 4.01467 11 6.49995L11 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
