import type { SVGProps } from "react";

export const CandleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 38L18 17H30V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 38L12.3714 41.4285C12.7511 42.3776 13.6704 43 14.6926 43H33.3074C34.3297 43 35.249 42.3776 35.6286 41.4285L37 38"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 33V32.5C12 30.567 10.433 29 8.5 29V29C6.567 29 5 30.567 5 32.5V33.5C5 35.9853 7.01472 38 9.5 38H38.5C40.9853 38 43 35.9853 43 33.5V32.5C43 30.567 41.433 29 39.5 29V29C37.567 29 36 30.567 36 32.5V33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 9.02655C20 8.38572 20.4444 5.5 20.4444 5.5L21.7778 5.91667L24 3C24 3 28 6.17073 28 9.02655C28 11.5598 25.9498 13 24 13C22.0502 13 20 11.5598 20 9.02655Z"
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
