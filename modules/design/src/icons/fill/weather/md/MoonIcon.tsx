import type { SVGProps } from "react";

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 15.404C5 8.6927 9.92972 3.13603 16.3917 2.01471L17.4336 3.49146C16.495 5.15464 15.9607 7.06783 15.9607 9.10606C15.9607 15.4952 21.2289 20.702 27.7617 20.702C28.4677 20.702 29.1585 20.6412 29.829 20.5248L30.8709 22.0016C28.5137 26.1785 23.9889 29 18.801 29C11.1942 29 5 22.928 5 15.404Z"
        fill="currentColor"
      />
    </svg>
  );
};
