import type { SVGProps } from "react";

export const PaddlingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 11V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 13V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 21L14 15.1903C14 13.8906 14.6315 12.6719 15.6933 11.9224L17 11L18.3067 11.9224C19.3685 12.6719 20 13.8906 20 15.1903L20 21L14 21Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 3L4 8.80973C4 10.1094 4.63146 11.3281 5.69327 12.0776L7 13L8.30673 12.0776C9.36854 11.3281 10 10.1094 10 8.80973L10 3L4 3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M15.5 3H18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5.5 21H8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
