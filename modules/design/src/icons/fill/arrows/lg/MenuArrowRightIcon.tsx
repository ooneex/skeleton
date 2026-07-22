import type { SVGProps } from "react";

export const MenuArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 37.5L6 37.5V40.5L27 40.5V37.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M27 7.5L6 7.5V10.5L27 10.5V7.5Z" fill="currentColor" />
      <path
        d="M38.3784 22.5L30.8785 15L32.9998 12.8787L44.1211 24L32.9998 35.1213L30.8785 33L38.3785 25.5H6V22.5H38.3784Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
