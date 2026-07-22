import type { SVGProps } from "react";

export const MilkContainerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 10H36" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M8 19H40" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8 19L8 42C8 43.6569 9.34315 45 11 45L37 45C38.6569 45 40 43.6569 40 42L40 19L36 10L36 2.99999L12 2.99999L12 10L8 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
