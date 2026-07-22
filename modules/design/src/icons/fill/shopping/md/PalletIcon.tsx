import type { SVGProps } from "react";

export const PalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 23H32V29H26V26L19.0001 25.9999V29H13.0001V25.9999L6 26V29H0V23Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.01625 4H26.9838L31.7898 21H0.210266L5.01625 4ZM7.93239 19H9.95409L11.8745 6H9.85282L7.93239 19ZM15 6V19H17V6H15ZM20.1426 6L22.0492 19H24.0706L22.164 6H20.1426Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
