import type { SVGProps } from "react";

export const PowerOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.5 4.20398C4.80989 5.76012 3 8.66867 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C16.9706 20.9999 21 16.9705 21 11.9999C21 8.66867 19.1901 5.76012 16.5 4.20398"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 11V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
