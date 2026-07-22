import type { SVGProps } from "react";

export const Heading5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 5H15V10.25H18.625C21.0412 10.25 23 12.2088 23 14.625V14.625C23 17.0412 21.0412 19 18.625 19H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M11 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
