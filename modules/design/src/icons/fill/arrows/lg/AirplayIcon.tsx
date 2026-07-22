import type { SVGProps } from "react";

export const AirplayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 8.68629 4.68629 6 8 6H40C43.3137 6 46 8.68629 46 12V33C46 36.3137 43.3137 39 40 39H37V36H40C41.6569 36 43 34.6569 43 33V12C43 10.3431 41.6569 9 40 9H8C6.34315 9 5 10.3431 5 12V33C5 34.6569 6.34315 36 8 36H11V39H8C4.68629 39 2 36.3137 2 33V12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 26.1592L36.8382 43.9999H11.1619L24 26.1592Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
