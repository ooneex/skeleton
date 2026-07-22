import type { SVGProps } from "react";

export const FileSliderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 20V24H13V23H11V21H13V20H15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19V15H20V16H22V18H20V19H18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 21H22V23H17V21Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 18H11V16H16V18Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0784 1C10.2828 1 9.51972 1.31607 8.95711 1.87868L3.87868 6.95711C3.31607 7.51972 3 8.28278 3 9.07843V20C3 21.6569 4.34315 23 6 23H9V21C9 20.4027 9.26188 19.8665 9.67709 19.5C9.26188 19.1335 9 18.5973 9 18V16C9 14.8954 9.89543 14 11 14H16C16.0875 14 16.1736 14.0056 16.2581 14.0165C16.6015 13.4096 17.2529 13 18 13H20C20.3643 13 20.7058 13.0974 21 13.2676V4C21 2.34315 19.6569 1 18 1H11.0784ZM11 9H5L11 3V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
