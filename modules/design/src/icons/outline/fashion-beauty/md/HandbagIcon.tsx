import type { SVGProps } from "react";

export const HandbagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 13V5C12 2.79086 13.7909 1 16 1V1C18.2091 1 20 2.79086 20 5V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 8L3.8153 23.2929C3.38499 26.3051 5.7223 29 8.76505 29H23.235C26.2777 29 28.615 26.3051 28.1847 23.2929L26 8H16H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
