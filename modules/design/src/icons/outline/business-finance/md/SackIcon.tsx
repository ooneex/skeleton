import type { SVGProps } from "react";

export const SackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 12.0001L16 10L14 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15.9999 30C8.82022 30 3.77771 27.7815 3.77771 21.8068C3.77771 17.4614 7.55861 12.033 11.9999 9H19.9999C24.4412 12.033 28.2221 17.4614 28.2221 21.8068C28.2221 27.7815 23.1796 30 15.9999 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11.9999 9L8.71423 3.16667L12.1428 2L15.9999 5.33333L20 2L23.4286 3.16667L20.1429 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M18 17L15 17C13.8954 17 13 17.8954 13 19V19C13 20.1046 13.8954 21 15 21H17C18.1046 21 19 21.8954 19 23V23C19 24.1046 18.1046 25 17 25H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 17V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 26V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
