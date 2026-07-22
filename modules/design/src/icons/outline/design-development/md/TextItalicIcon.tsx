import type { SVGProps } from "react";

export const TextItalicIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 4.5C21 5.32843 20.3284 6 19.5 6C18.6716 6 18 5.32843 18 4.5C18 3.67157 18.6716 3 19.5 3C20.3284 3 21 3.67157 21 4.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M14 10L18 10L13.5 29L14.1667 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 29L17 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 4.5C21 5.32843 20.3284 6 19.5 6C18.6716 6 18 5.32843 18 4.5C18 3.67157 18.6716 3 19.5 3C20.3284 3 21 3.67157 21 4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
