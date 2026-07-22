import type { SVGProps } from "react";

export const ChocolateBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M42 25V34H40.6592L24.8537 29.3081C24.2966 29.1427 23.7034 29.1427 23.1463 29.3081L7.34082 34H6V25H42Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 2V5C27 7.76142 29.2386 10 32 10H33.5V13C33.5 15.7614 35.7386 18 38.5 18H40V22H8V8C8 4.68629 10.6863 2 14 2H27ZM14 8V19H22V8H14Z"
        fill="currentColor"
      />
      <path
        d="M40 36.9336V42C39.9998 44.209 38.209 46 36 46H12C9.79098 46 8.0002 44.209 8 42V36.9336L24 32.1836L40 36.9336Z"
        fill="currentColor"
      />
    </svg>
  );
};
