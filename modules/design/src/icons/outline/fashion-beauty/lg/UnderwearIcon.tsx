import type { SVGProps } from "react";

export const UnderwearIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 15L23.25 11H24.75L27 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 11V17L44.0298 17.2134C35.0492 19.1892 28.2448 26.5418 26.9694 35.6483L26.5 39H21.5L21.0306 35.6483C19.7552 26.5418 12.9508 19.1892 3.97019 17.2134L3 17V11H45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
