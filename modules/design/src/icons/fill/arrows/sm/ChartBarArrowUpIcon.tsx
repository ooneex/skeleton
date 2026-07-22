import type { SVGProps } from "react";

export const ChartBarArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 12H22V22H18V12Z" fill="currentColor" data-color="color-2" />
      <path d="M2 16H6V22H2V16Z" fill="currentColor" data-color="color-2" />
      <path d="M12 1L6.5 8L10 8L10 22L14 22L14 8L17.5 8L12 1Z" fill="currentColor" />
    </svg>
  );
};
