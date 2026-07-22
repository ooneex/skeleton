import type { SVGProps } from "react";

export const BaloonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 20V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.03058 20H14.9694C15.387 20 15.6206 19.5185 15.3621 19.1905L13.5 16.8274C16.6452 16.0917 19 13.0905 19 9.5C19 5.35786 15.866 2 12 2C8.13401 2 5 5.35786 5 9.5C5 13.0905 7.35482 16.0917 10.5 16.8274L8.63786 19.1905C8.37943 19.5185 8.61304 20 9.03058 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
