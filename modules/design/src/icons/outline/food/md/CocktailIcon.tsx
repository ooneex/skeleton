import type { SVGProps } from "react";

export const CocktailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 13H21" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M18 8C18 4.68629 20.6863 2 24 2C27.3137 2 30 4.68629 30 8C30 11.3137 27.3137 14 24 14C22.7733 14 21.6325 13.6318 20.6822 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M24 8H4V8.7L14 22L24 8.7V8Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M14 21.5V30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 30H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
