import type { SVGProps } from "react";

export const ButterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 14V16H21V14H24Z" fill="currentColor" />
      <path d="M3 14V16H0V14H3Z" fill="currentColor" />
      <path
        d="M23.2812 14L22.3486 17.7275C22.0148 19.063 20.8151 20 19.4385 20H4.56152C3.27109 20 2.1357 19.1768 1.72363 17.9736L0.71875 14H23.2812Z"
        fill="currentColor"
      />
      <path
        d="M12.5 4V8.5C12.5 9.29259 13.1149 9.93947 13.8936 9.99414C13.9285 9.99784 13.964 10 14 10C14.0356 10 14.0708 9.99778 14.1055 9.99414C14.8846 9.93994 15.5 9.29292 15.5 8.5V4H19C20.1046 4 21 4.89543 21 6V12H3V6C3 4.89543 3.89543 4 5 4H12.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
