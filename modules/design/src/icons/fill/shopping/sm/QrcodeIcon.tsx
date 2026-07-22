import type { SVGProps } from "react";

export const QrcodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H11V11H2V2ZM4 4V9H9V4H4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 2H22V11H13V2ZM15 4V9H20V4H15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13H11V22H2V13ZM4 15V20H9V15H4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 13H22V15H20V18H22V20H18V17H15V15H13V13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 17V20H18V22H13V17H15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 5.5H7.51V7.5H5.5V5.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 16.5H7.51V18.5H5.5V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16.49 5.5H18.5V7.5H16.49V5.5Z" fill="currentColor" />
    </svg>
  );
};
