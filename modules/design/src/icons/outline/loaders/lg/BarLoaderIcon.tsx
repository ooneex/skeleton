import type { SVGProps } from "react";

export const BarLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path opacity="0.6" d="M24 39V45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        opacity="0.8"
        d="M45.005 23.995L39.005 23.995"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.4"
        d="M9.005 23.995L3.005 23.995"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.9"
        d="M38.8507 9.14722L34.6081 13.3899"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.5"
        d="M13.3948 34.6031L9.1522 38.8457"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.7"
        d="M38.8578 38.8457L34.6151 34.6031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.3"
        d="M13.4019 13.3899L9.15928 9.14722"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
