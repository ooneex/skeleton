import type { SVGProps } from "react";

export const StoreIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 2V4.58579L1 7.58579V10H23V7.58579L20 4.58579V2H4Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12H3V19C3 20.6569 4.34315 22 6 22H12V17H16V22H18C19.6569 22 21 20.6569 21 19V12ZM6 15H9V18H6V15Z"
        fill="currentColor"
      />
    </svg>
  );
};
