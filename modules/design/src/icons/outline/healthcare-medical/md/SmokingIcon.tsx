import type { SVGProps } from "react";

export const SmokingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M23 19V25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M28 15V11C28 7.68629 25.3137 5 22 5H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 15V14.2143C23 12.2813 21.433 10.7143 19.5 10.7143V10.7143C17.567 10.7143 16 9.14728 16 7.21429V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 23V21C29 19.8954 28.1046 19 27 19H3V25H27C28.1046 25 29 24.1046 29 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
