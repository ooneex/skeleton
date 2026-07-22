import type { SVGProps } from "react";

export const ChefUniformIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 3L21 18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M33 3L27 18H18V43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M43 39V13.9999C43 11.7908 41.2091 9.99994 39 9.99994H36L33 2.99994H15L12 9.99994H9C6.79086 9.99994 5 11.7908 5 13.9999V39C5 41.2092 6.79086 43 9 43H39C41.2091 43 43 41.2092 43 39Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 36L23 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 30L23 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 24L23 24"
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
