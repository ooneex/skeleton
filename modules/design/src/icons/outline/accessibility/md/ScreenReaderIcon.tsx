import type { SVGProps } from "react";

export const ScreenReaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 28H5C3.34315 28 2 26.6569 2 25V7C2 5.34315 3.34315 4 5 4H27C28.6569 4 30 5.34315 30 7V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.4615 18H10V22.2667V26H16.4615L24 30V14L16.4615 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M28.5 27.8621C30.0285 26.578 31 24.6525 31 22.5C31 20.3475 30.0285 18.422 28.5 17.1379"
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
