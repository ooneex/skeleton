import type { SVGProps } from "react";

export const GymBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 28V9C9 5.13401 12.134 2 16 2V2C19.866 2 23 5.13401 23 9V28"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M25.9199 12C26.896 12 27.7961 12.5265 28.2747 13.3772V13.3772C30.5878 17.4894 30.5878 22.5106 28.2747 26.6228V26.6228C27.7961 27.4735 26.896 28 25.9199 28H6.08011C5.10404 28 4.20386 27.4735 3.72533 26.6228V26.6228C1.4122 22.5106 1.4122 17.4894 3.72533 13.3772V13.3772C4.20386 12.5265 5.10404 12 6.08011 12H25.9199Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M14 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
