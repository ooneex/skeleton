import type { SVGProps } from "react";

export const CloudFogIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.0665 8.35256C3.62627 4.24736 7.20427 1 11.5 1C15.7459 1 19.1859 4.0787 19.8907 8.07982C22.2211 8.50238 24 10.5515 24 13V14H0V13C0 10.9104 1.26852 9.09035 3.0665 8.35256Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16L15 16V18L2 18L2 16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 20L20 20V22L9 22V20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 16H22V18H17V16Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 20H7V22H4V20Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
