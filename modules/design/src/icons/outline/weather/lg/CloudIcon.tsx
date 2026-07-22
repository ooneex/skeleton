import type { SVGProps } from "react";

export const CloudIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28.1829 7C19.9538 7.00425 12.9383 13.0322 11.6069 21.2418C6.22966 21.9147 2.41078 26.8659 3.07505 32.3002C3.68047 37.2515 7.83148 40.9773 12.7673 41H28.1829C37.4702 41 45 33.3882 45 24C45 14.6117 37.4702 7 28.1829 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
