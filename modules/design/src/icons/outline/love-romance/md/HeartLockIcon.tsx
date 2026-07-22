import type { SVGProps } from "react";

export const HeartLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.5 10V7C10.5 3.68629 13.1863 1 16.5 1V1C19.8137 1 22.5 3.68629 22.5 7V10"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16.5 30C19.1616 28.8235 28.5 22.3035 28.5 16.3271C28.5 12.8329 25.6056 10 22.0392 10C19.6872 10 17.9304 11.4447 16.5 13.0659C15.072 11.4424 13.3128 10 10.9608 10C7.392 10 4.5 12.8329 4.5 16.3271C4.5 22.3035 13.8384 28.8235 16.5 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.5 18V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
