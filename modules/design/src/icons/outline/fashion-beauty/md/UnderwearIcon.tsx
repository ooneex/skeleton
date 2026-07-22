import type { SVGProps } from "react";

export const UnderwearIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 11L15.5 8H16.5L18 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 8V12.8214L29.4625 12.9029C23.5493 13.7989 19.0103 18.6138 18.4644 24.5696L18.3333 26H13.6667L13.5356 24.5696C12.9897 18.6138 8.45073 13.7989 2.53749 12.9029L2 12.8214V8H30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
