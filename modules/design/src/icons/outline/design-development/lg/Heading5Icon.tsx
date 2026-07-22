import type { SVGProps } from "react";

export const Heading5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M42 10H28V21H35.5C40.1944 21 44 24.8056 44 29.5V29.5C44 34.1944 40.1944 38 35.5 38H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M21 24H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
