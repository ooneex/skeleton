import type { SVGProps } from "react";

export const Heading2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M44 38H28V36V36C28 33.5537 29.3983 31.3227 31.5999 30.2563L39.0589 26.6434C42.0807 25.1797 44 22.1174 44 18.7597V18C44 13.5817 40.4183 10 36 10V10C31.5817 10 28 13.5817 28 18V18"
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
