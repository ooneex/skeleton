import type { SVGProps } from "react";

export const BoxIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22.2363 11.4389L16.8922 14.1076C16.3304 14.3882 15.6694 14.3886 15.1073 14.1087L9.76176 11.4474"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3.5 15.5V24.1954L16 30.5L28.5 24.1954V15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3.99029 8.4778L15 14.1166L13.5263 20L1.3161 14.1166L3.49998 7.22727L16 1.5L28.5 7.22727L30.6882 14.1259L18.4737 20L17 14.1259L28.0007 8.4778"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
