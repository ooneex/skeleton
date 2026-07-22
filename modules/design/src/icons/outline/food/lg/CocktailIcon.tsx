import type { SVGProps } from "react";

export const CocktailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 32.5V45" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M11 20H31" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M29 11C29 6.58172 32.5817 3 37 3C41.4183 3 45 6.58172 45 11C45 15.4183 41.4183 19 37 19C35.4032 19 33.9156 18.5322 32.6669 17.7261"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M37 11H5V12.1L21 33L37 12.1V11Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M14 45H28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
