import type { SVGProps } from "react";

export const BenchPressIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 13V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M33 13V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M9 13H39" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 33H33" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M15 38V33L19.5 26H28.5L33 33.0001V38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 43H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M2 13H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M46 13H44" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M4 19L4 7C4 5.89543 4.89543 5 6 5L7 5C8.10457 5 9 5.89543 9 7L9 19C9 20.1046 8.10457 21 7 21L6 21C4.89543 21 4 20.1046 4 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M44 19L44 7C44 5.89543 43.1046 5 42 5L41 5C39.8954 5 39 5.89543 39 7L39 19C39 20.1046 39.8954 21 41 21L42 21C43.1046 21 44 20.1046 44 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
