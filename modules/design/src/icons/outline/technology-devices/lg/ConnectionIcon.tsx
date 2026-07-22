import type { SVGProps } from "react";

export const ConnectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M34.8228 42C40.9213 38.3253 45 31.639 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45V37"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M19 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M29 20L29 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M14 20L14 27C14 32.5228 18.4772 37 24 37C29.5228 37 34 32.5229 34 27L34 20L14 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 27C22 28.1046 22.8954 29 24 29C25.1046 29 26 28.1046 26 27C26 25.8954 25.1046 25 24 25C22.8954 25 22 25.8954 22 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
