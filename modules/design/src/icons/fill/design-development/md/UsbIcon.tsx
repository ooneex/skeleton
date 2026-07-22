import type { SVGProps } from "react";

export const UsbIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1H25V13H20V12.0001V9.66675V8.66675H18V9.66675V12.0001V13H14V12.0001V9.66675V8.66675H12V9.66675V12.0001V13H7V1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 21V15H27V21C27 27.0751 22.0751 32 16 32C9.92487 32 5 27.0751 5 21ZM19 21V19H13V21H19Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
