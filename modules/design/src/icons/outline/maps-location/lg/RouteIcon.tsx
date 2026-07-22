import type { SVGProps } from "react";

export const RouteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 7H36.5C41.1944 7 45 10.8056 45 15.5V15.5C45 20.1944 41.1944 24 36.5 24H33H33.1818"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14.8761 24H15H11.5C6.80555 24 2.99997 27.8056 2.99997 32.5V32.5C2.99997 37.1944 6.80555 41 11.5 41H38H37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M34 37L38 41L34 45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
