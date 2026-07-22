import type { SVGProps } from "react";

export const FahrenheitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C3.44772 2 3 2.44772 3 3C3 3.55228 3.44772 4 4 4C4.55228 4 5 3.55228 5 3C5 2.44772 4.55228 2 4 2ZM1 3C1 1.34315 2.34315 0 4 0C5.65685 0 7 1.34315 7 3C7 4.65685 5.65685 6 4 6C2.34315 6 1 4.65685 1 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 5H20V7H11V22H9V5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 12H17V14H9V12Z" fill="currentColor" />
    </svg>
  );
};
