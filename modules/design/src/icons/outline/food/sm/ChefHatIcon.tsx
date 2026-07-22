import type { SVGProps } from "react";

export const ChefHatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 17V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 17H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.884 6.01779C17.0671 6 17.2459 6 17.4545 6C20 6 22 8.07059 22 10.7059C22 13.5 20 15 18 15.4118V21H6V15.4118C4 15 2 13.5 2 10.7059C2 8.07059 4 6 6.54545 6C6.75414 6 6.93288 6 7.11604 6.01779"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7.4 9C7.1 8.4 7 7.7 7 7C7 4.2 9.2 2 12 2C14.8 2 17 4.2 17 7C17 7.7 16.9 8.4 16.6 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
