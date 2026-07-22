import type { SVGProps } from "react";

export const ChartBarTrendUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 11H14V22H10V11Z" fill="currentColor" />
      <path d="M18 7H22V22H18V7Z" fill="currentColor" />
      <path d="M2 15H6V22H2V15Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4142 2L10 8.41421L6 4.41421L2 8.41421L0.585785 7L6 1.58578L10 5.58579L15 0.585785L16.4142 2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
