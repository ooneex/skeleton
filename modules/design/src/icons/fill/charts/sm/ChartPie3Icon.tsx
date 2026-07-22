import type { SVGProps } from "react";

export const ChartPie3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 3C5.47715 3 1 7.47715 1 13C1 18.5228 5.47715 23 11 23C16.5228 23 21 18.5228 21 13H11V3Z"
        fill="currentColor"
      />
      <path d="M13 1V11H23C23 5.47715 18.5228 1 13 1Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
