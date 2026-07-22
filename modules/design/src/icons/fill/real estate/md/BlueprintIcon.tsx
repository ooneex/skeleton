import type { SVGProps } from "react";

export const BlueprintIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 30.0001C2.79086 30.0001 1 28.2092 1 26.0001L0.999999 8.00006C0.999999 5.79093 2.79086 4.00006 5 4.00006L23 4.00006L23 1.00006L27 1.00001C29.2091 1.00001 31 2.79087 31 5.00001L31 26.0001C31 28.2092 29.2091 30.0001 27 30.0001L5 30.0001ZM27 28.0001C28.1046 28.0001 29 27.1046 29 26.0001C29 24.8955 28.1046 24.0001 27 24.0001L23 24.0001L23 6.00006L5 6.00006C3.89543 6.00006 3 6.89549 3 8.00006L3 26.0001C3 27.1046 3.89543 28.0001 5 28.0001L27 28.0001Z"
        fill="currentColor"
      />
      <path d="M13 9H15V17H11V15H13V9Z" fill="currentColor" data-color="color-2" />
      <path d="M6 9H20V25H11V20H13V23H18V11H8V25H6V9Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
