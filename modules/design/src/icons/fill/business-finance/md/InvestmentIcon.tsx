import type { SVGProps } from "react";

export const InvestmentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 29C16 29 17.7639 25.2253 21.1587 23.2653C24.5535 21.3053 28.1244 22 28.1244 22C28.1244 22 27.2029 26.7039 23.8687 28.6289C20.4738 30.5889 16 29 16 29Z"
        fill="currentColor"
      />
      <path
        d="M16 29C16 29 14.2361 25.2253 10.8413 23.2653C7.44649 21.3053 3.87564 22 3.87564 22C3.87564 22 4.79714 26.7039 8.13134 28.6289C11.5261 30.5889 16 29 16 29Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 20V29H15V20H17Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11C6 5.47715 10.4772 1 16 1C21.5228 1 26 5.47715 26 11C26 16.5228 21.5228 21 16 21C10.4772 21 6 16.5228 6 11ZM17 7H15V15H17V7Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
