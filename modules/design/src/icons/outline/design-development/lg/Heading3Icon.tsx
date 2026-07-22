import type { SVGProps } from "react";

export const Heading3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 10H42V10.7191L30 21.5399V22H36C40.4183 22 44 25.5817 44 30V30C44 34.4183 40.4183 38 36 38H28"
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
