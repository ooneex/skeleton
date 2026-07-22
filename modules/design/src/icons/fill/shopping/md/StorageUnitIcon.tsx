import type { SVGProps } from "react";

export const StorageUnitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 9H10V19H22V9H17V12H15V9Z" fill="currentColor" />
      <path d="M8 21H3V31H15V21H10V24H8V21Z" fill="currentColor" />
      <path d="M22 21H17V31H29V21H24V24H22V21Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0.348267L31.3644 9.12791L30.3721 10.8644L16 2.65177L1.6279 10.8644L0.63562 9.12791L16 0.348267Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
