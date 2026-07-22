import type { SVGProps } from "react";

export const DetachedPropertyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9999 0.848251L31.3644 9.6279L30.3721 11.3644L15.9999 3.15175L1.6279 11.3644L0.63562 9.6279L15.9999 0.848251Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 21V26C3 28.2091 4.79086 30 7 30H14V24H18V30H25C27.2091 30 29 28.2091 29 26V21L3 21ZM25 23V26H23V23H25ZM9 23H7V26H9V23Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 19V11.741L15.9999 5.45526L27 11.741V19H5ZM20 14V17H18V14H20ZM20 9H18V12H20V9ZM14 14V17H12V14H14ZM14 9H12V12H14V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
