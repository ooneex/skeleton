import type { SVGProps } from "react";

export const MenuArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 37.5L42 37.5V40.5L21 40.5V37.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 7.5L42 7.5V10.5L21 10.5V7.5Z" fill="currentColor" />
      <path
        d="M9.62156 22.5L17.1215 15L15.0002 12.8787L3.87891 24L15.0002 35.1213L17.1215 33L9.62154 25.5H42V22.5H9.62156Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
