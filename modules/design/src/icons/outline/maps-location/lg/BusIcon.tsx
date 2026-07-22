import type { SVGProps } from "react";

export const BusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 5L18 9H30L32 5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M5 18H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M46.02 18H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 41V10C43 7.23858 40.7614 5 38 5H10C7.23858 5 5 7.23858 5 10V41C5 42.1046 5.89543 43 7 43H12C13.1046 43 14 42.1046 14 41V39H34V41C34 42.1046 34.8954 43 36 43H41C42.1046 43 43 42.1046 43 41Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M5 22H43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M15 29.5C15 30.8807 13.8807 32 12.5 32C11.1193 32 10 30.8807 10 29.5C10 28.1193 11.1193 27 12.5 27C13.8807 27 15 28.1193 15 29.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M38 29.5C38 30.8807 36.8807 32 35.5 32C34.1193 32 33 30.8807 33 29.5C33 28.1193 34.1193 27 35.5 27C36.8807 27 38 28.1193 38 29.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
