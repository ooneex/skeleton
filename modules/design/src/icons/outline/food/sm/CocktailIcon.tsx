import type { SVGProps } from "react";

export const CocktailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 9.5H15" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M14 5C14 2.79086 15.7909 1 18 1C20.2091 1 22 2.79086 22 5C22 7.20914 20.2091 9 18 9C17.2016 9 16.4578 8.76608 15.8335 8.36303"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M18 5H4V5.5L11 15L18 5.5V5Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M11 15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 22H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
