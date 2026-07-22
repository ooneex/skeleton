import type { SVGProps } from "react";

export const RoadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8707 2H4.12928L1.3515 22H22.6485L19.8707 2ZM13 16H11V20H13V16ZM13 10V14H11V10H13ZM13 4H11V8.00002H13V4Z"
        fill="currentColor"
      />
    </svg>
  );
};
