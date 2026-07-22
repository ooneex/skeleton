import type { SVGProps } from "react";

export const Eraser3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 12L21.5 23.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M28.8404 11.6568L21.7694 4.58571C20.5978 3.41414 18.6983 3.41414 17.5267 4.58571L2.67748 19.435C1.50591 20.6065 1.50591 22.506 2.67748 23.6776L6.99988 28L16.7388 28.0011L28.8404 15.8994C30.012 14.7278 30.012 12.8284 28.8404 11.6568Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 28L29 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
