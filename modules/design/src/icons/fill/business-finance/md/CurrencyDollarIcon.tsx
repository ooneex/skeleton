import type { SVGProps } from "react";

export const CurrencyDollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.5C6 6.91015 8.91015 4 12.5 4H23.75V6H12.5C10.0147 6 8 8.01472 8 10.5C8 12.9853 10.0147 15 12.5 15H19.5C23.0898 15 26 17.9101 26 21.5C26 25.0899 23.0899 28 19.5 28H8.25V26H19.5C21.9853 26 24 23.9853 24 21.5C24 19.0147 21.9853 17 19.5 17H12.5C8.91015 17 6 14.0899 6 10.5Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 1V31H15V1H17Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
