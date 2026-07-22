import type { SVGProps } from "react";

export const CameraLensIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 6L3.5 6C2.67157 6 2 6.67157 2 7.5L2 16.5C2 17.3284 2.67157 18 3.5 18L14 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 21L21 21L19.7814 18.5629C19.3384 17.6767 19.6416 16.599 20.4817 16.0739C23.4923 14.1923 23.4923 9.80772 20.4817 7.92609C19.6416 7.401 19.3384 6.32327 19.7814 5.43713L21 3L14 3L14 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 10L6 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 14L6 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
