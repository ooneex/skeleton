import type { SVGProps } from "react";

export const RouteAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M41 24H46" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M1 24H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 17L24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 37H11.1947C8.74649 37 7.21034 34.3338 8.42417 32.1926L21.23 9.61975C22.4552 7.46009 25.5458 7.46009 26.7688 9.61975L39.5746 32.1926C40.7907 34.3338 39.2546 37 36.804 37H24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22.5 30.5C22.5 31.3284 23.1716 32 24 32C24.8284 32 25.5 31.3284 25.5 30.5C25.5 29.6716 24.8284 29 24 29C23.1716 29 22.5 29.6716 22.5 30.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};
