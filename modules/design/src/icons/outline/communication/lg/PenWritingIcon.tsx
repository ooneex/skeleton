import type { SVGProps } from "react";

export const PenWritingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 43H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 36L17.0434 33.1304L36.4644 13.7095C38.417 11.7569 38.417 8.5911 36.4644 6.63847L36.3616 6.53563C34.409 4.58296 31.2431 4.58294 29.2905 6.53559L9.86955 25.9566L7 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
