import type { SVGProps } from "react";

export const FileChartBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 13V23H16V13H18Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 16V23H20V16H22Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 18V23H12V18H14Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.95711 1.87868C9.51972 1.31607 10.2828 1 11.0784 1H18C19.6569 1 21 2.34315 21 4V14H20V13C20 11.8954 19.1046 11 18 11H16C14.8954 11 14 11.8954 14 13V16H12C10.8954 16 10 16.8954 10 18V23H6C4.34315 23 3 21.6569 3 20V9.07843C3 8.28278 3.31607 7.51972 3.87868 6.95711L8.95711 1.87868ZM5 9H11V3L5 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
