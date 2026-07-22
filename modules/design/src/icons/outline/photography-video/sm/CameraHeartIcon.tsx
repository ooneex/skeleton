import type { SVGProps } from "react";

export const CameraHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 18L22 8C22 6.89543 21.1046 6 20 6L17 6L15 3L9 3L7 6L4 6C2.89543 6 2 6.89543 2 8L2 18C2 19.1046 2.89543 20 4 20L20 20C21.1046 20 22 19.1046 22 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.5 11.425C16.5 13.715 12.9983 16.0489 12 16.5C11.0017 16.0489 7.5 13.715 7.5 11.425C7.5 10.0855 8.58525 9 9.92325 9C10.7669 9 11.477 9.50711 12 10.0961C12.523 9.50711 13.2331 9 14.0767 9C15.4147 9 16.5 10.0855 16.5 11.425Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
