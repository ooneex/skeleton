import type { SVGProps } from "react";

export const ChartBarAxisXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 41L46 41V44L2 44L2 41Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 19H14V38H4V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 4H29V38H19V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 27H44V38H34V27Z" fill="currentColor" />
    </svg>
  );
};
