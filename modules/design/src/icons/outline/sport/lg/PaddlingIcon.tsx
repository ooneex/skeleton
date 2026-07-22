import type { SVGProps } from "react";

export const PaddlingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 18V43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M34 30V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9.5 5C8.11929 5 7 6.11929 7 7.5L7 19.9843C7 23.3306 8.67374 26.4551 11.4595 28.3092L14 30L16.5405 28.3092C19.3263 26.4551 21 23.3306 21 19.9843L21 7.5C21 6.11929 19.8807 5 18.5 5L9.5 5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M29.5 43C28.1193 43 27 41.8807 27 40.5L27 28.0157C27 24.6694 28.6737 21.5449 31.4595 19.6908L34 18L36.5405 19.6908C39.3263 21.5449 41 24.6694 41 28.0157L41 40.5C41 41.8807 39.8807 43 38.5 43L29.5 43Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 43H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M31 5H37" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
