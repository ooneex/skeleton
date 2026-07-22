import type { SVGProps } from "react";

export const PaddlingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 3V12H16V3H18Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 21V12H6V21H8Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 22L13 15.1903C13 13.5657 13.7893 12.0423 15.1166 11.1054L17 9.77596L18.8834 11.1054C20.2107 12.0423 21 13.5657 21 15.1903L21 22L13 22Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2L3 8.80973C3 10.4343 3.78932 11.9577 5.11658 12.8946L7 14.224L8.88342 12.8946C10.2107 11.9577 11 10.4343 11 8.80973L11 2L3 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 2H19.5V4H14.5V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 22H9.5V20H4.5V22Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
