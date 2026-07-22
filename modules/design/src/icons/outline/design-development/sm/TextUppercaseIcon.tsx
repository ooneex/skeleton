import type { SVGProps } from "react";

export const TextUppercaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2.74344 15H10.222" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M1.58922 19H1.5L5.94445 5H7.05556L11.5 19H11.4102"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 13H22V19H20C16.134 19 13 15.866 13 12V12C13 8.13401 16.134 5 20 5H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
