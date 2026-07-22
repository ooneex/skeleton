import type { SVGProps } from "react";

export const Image2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 41L14 26.4167L19.7143 34.0556L30.4286 16L44 41H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 17C16.7614 17 19 14.7614 19 12C19 9.23858 16.7614 7 14 7C11.2386 7 9 9.23858 9 12C9 14.7614 11.2386 17 14 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
