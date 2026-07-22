import type { SVGProps } from "react";

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM25.5 23.1875V9H22.5V24.8126L35.937 33.5758L37.5758 31.063L25.5 23.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};
