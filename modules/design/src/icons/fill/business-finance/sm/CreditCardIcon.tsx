import type { SVGProps } from "react";

export const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 18V10H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18ZM5 15V17H9V15H5Z"
        fill="currentColor"
      />
      <path d="M4 3C2.34315 3 1 4.34315 1 6V7H23V6C23 4.34315 21.6569 3 20 3H4Z" fill="currentColor" />
    </svg>
  );
};
