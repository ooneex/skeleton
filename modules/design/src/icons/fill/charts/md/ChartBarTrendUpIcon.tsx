import type { SVGProps } from "react";

export const ChartBarTrendUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 15H19V30H13V15Z" fill="currentColor" />
      <path d="M23 10H29V30H23V10Z" fill="currentColor" />
      <path d="M3 20H9V30H3V20Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4142 2.99219L14.0769 11.4221L8.53847 5.8221L3.00782 11.4142L1.58582 10.0078L8.53847 2.97792L14.0769 8.57792L20.9922 1.58582L22.4142 2.99219Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
