import type { SVGProps } from "react";

export const TextPromptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 15H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M19.5 16.5L18 13L16.5 16.5L13 18L16.5 19.5L18 23L19.5 19.5L23 18L19.5 16.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
