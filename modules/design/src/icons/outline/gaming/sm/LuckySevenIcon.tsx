import type { SVGProps } from "react";

export const LuckySevenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 20V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 20V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 10L7.5 10V10.5L7.36824 10.7306C6.79927 11.7263 6.5 12.8532 6.5 14V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.5 10L18 10V10.5L17.8682 10.7306C17.2993 11.7263 17 12.8532 17 14V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11.25 10L12.75 10V10.5L12.6182 10.7306C12.0493 11.7263 11.75 12.8532 11.75 14V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
