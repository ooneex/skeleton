import type { SVGProps } from "react";

export const PlaneTakeOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.08143 22.445L13.5455 25.6411L22.2058 20.6411L12.5587 12.9318L15.2728 9.6327L30 16.1411L37.7942 11.6411C40.1857 10.2604 43.2436 11.0797 44.6244 13.4712V13.4712C45.1766 14.4278 44.8489 15.651 43.8923 16.2032L15.637 32.5164C14.9203 32.9302 14.0229 32.8599 13.3794 32.3395L3.61731 24.4449L7.08143 22.445Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 41H45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
