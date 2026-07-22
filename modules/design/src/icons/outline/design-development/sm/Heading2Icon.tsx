import type { SVGProps } from "react";

export const Heading2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M23 19H15V18V18C15 16.7769 15.6992 15.6613 16.8 15.1281L20.5294 13.3217C22.0404 12.5898 23 11.0587 23 9.37987V9C23 6.79086 21.2091 5 19 5V5C16.7909 5 15 6.79086 15 9V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
