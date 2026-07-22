import type { SVGProps } from "react";

export const PlugIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5006 38L25.5004 46L22.5004 45.9999L22.5006 37.9999L25.5006 38Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 2L34 13.5L31 13.5L31 2L34 2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 2L17 14L14 14L14 2L17 2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 20.625C9.00257 23.4727 9.86925 26.2497 11.4809 28.5741C13.0925 30.8985 15.3699 32.6562 18 33.6054V39H30V33.6054C32.6301 32.6562 34.9075 30.8985 36.5191 28.5741C38.1307 26.2497 38.9974 23.4727 39 20.625V18H43V12H5V18H9V20.625ZM27 26C27 27.6569 25.6569 29 24 29C22.3431 29 21 27.6569 21 26C21 24.3431 22.3431 23 24 23C25.6569 23 27 24.3431 27 26Z"
        fill="currentColor"
      />
    </svg>
  );
};
