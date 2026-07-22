import type { SVGProps } from "react";

export const WindIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 16H26C28.2091 16 30 17.7909 30 20V20.2123C30 22.3042 28.3042 24 26.2123 24V24C24.5108 24 23.0182 22.8654 22.5628 21.2261L22.5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 11H18C20.2091 11 22 9.20914 22 7V6.7877C22 4.69581 20.3042 3 18.2123 3V3C16.5108 3 15.0182 4.13455 14.5628 5.77394L14.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 21H12C14.2091 21 16 22.7909 16 25V25.2123C16 27.3042 14.3042 29 12.2123 29V29C10.5108 29 9.01818 27.8654 8.56279 26.2261L8.5 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
