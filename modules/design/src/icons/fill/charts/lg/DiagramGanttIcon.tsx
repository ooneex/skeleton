import type { SVGProps } from "react";

export const DiagramGanttIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 13.5H2V10.5H11V13.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 37.5H37V34.5H46V37.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 21.5H8V18.5H29V21.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M40 29.5H19V26.5H40V29.5Z" fill="currentColor" />
    </svg>
  );
};
