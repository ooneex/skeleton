import type { SVGProps } from "react";

export const StatisticsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 29V20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M28 29V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 29V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 29V20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 11L12.1 3.28571L19.9 9.71429L29 2"
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
