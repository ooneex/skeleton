import type { SVGProps } from "react";

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 30H22V44H15V30Z" fill="currentColor" />
      <path d="M26 4H33V44H26V4Z" fill="currentColor" data-color="color-2" />
      <path d="M37 22L44 22V44H37V22Z" fill="currentColor" />
      <path d="M4 21H11V44H4V21Z" fill="currentColor" />
    </svg>
  );
};
