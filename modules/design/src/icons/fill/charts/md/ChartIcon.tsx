import type { SVGProps } from "react";

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 2H19V30H13V2Z" fill="currentColor" />
      <path d="M23 11H29V30H23V11Z" fill="currentColor" data-color="color-2" />
      <path d="M3 18H9V30H3V18Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
