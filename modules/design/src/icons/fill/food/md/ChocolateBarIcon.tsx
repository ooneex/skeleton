import type { SVGProps } from "react";

export const ChocolateBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 16V23H27.2031L27.0771 22.9668L16 20.0342L4.92285 22.9668L4.79688 23H3V16H29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M27 24.9359V27.0003C26.9998 29.2093 25.209 31.0003 23 31.0003H9C6.86008 31.0003 5.11228 29.3196 5.00488 27.2064L5.00195 24.9349L16 22.0989L27 24.9359Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 1V3C17 5.20914 18.7909 7 21 7H21.5V8C21.5 10.2091 23.2909 12 25.5 12H27V14H5V5C5 2.79086 6.79086 1 9 1H17ZM9 5V11H13V5H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
