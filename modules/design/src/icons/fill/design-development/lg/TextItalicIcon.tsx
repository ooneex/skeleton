import type { SVGProps } from "react";

export const TextItalicIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1912 44L24.9319 18L20 18L20 15L28.8089 15L22.0681 41L22.5 41L22.5 44L18.1912 44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 41L14 41L14 44L26 44L26 41Z" fill="currentColor" />
      <path
        d="M25 8C25 5.79086 26.7909 4 29 4C31.2091 4 33 5.79086 33 8C33 10.2091 31.2091 12 29 12C26.7909 12 25 10.2091 25 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
