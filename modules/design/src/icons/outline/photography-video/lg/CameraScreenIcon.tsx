import type { SVGProps } from "react";

export const CameraScreenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 17H9V35H29V17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M35 17L39 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37 35C38.6569 35 40 33.6569 40 32C40 30.3431 38.6569 29 37 29C35.3431 29 34 30.3431 34 32C34 33.6569 35.3431 35 37 35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 36L45 16C45 13.2386 42.7614 11 40 11L34.5 11L30 5L18 5L13.5 11L8 11C5.23857 11 3 13.2386 3 16L3 36C3 38.7614 5.23858 41 8 41L40 41C42.7614 41 45 38.7614 45 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
