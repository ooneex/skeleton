import type { SVGProps } from "react";

export const KnifeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.5 24.5L8.90381 29.0962C7.9275 30.0725 6.34458 30.0725 5.36827 29.0962V29.0962C4.39196 28.1199 4.39196 26.537 5.36827 25.5607L9.96447 20.9645"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4.30761 15.3076L13.5 24.5L29.7635 8.23654L25.5208 3.9939C22.7871 1.26023 18.355 1.26023 15.6213 3.9939L4.30761 15.3076Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13.3033 18.1967L18.9602 12.5399"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
