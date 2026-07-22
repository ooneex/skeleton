import type { SVGProps } from "react";

export const SprayCanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 13C8 9.68629 10.6863 7 14 7H16C19.3137 7 22 9.68629 22 13L8 13Z" fill="currentColor" />
      <path d="M18.0001 6V2L12 3.15291V6C14.6667 6 15.3334 6 18.0001 6Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9141 1.99991L26.9999 4.91412L25.5857 3.49991L28.4999 0.585693L29.9141 1.99991ZM27.9999 5.99996H32V7.99996H27.9999V5.99996ZM27 9.08576L29.9141 11.9999L28.4999 13.4141L25.5858 10.5L27 9.08576Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M8 15V30H22V15H8Z" fill="currentColor" />
    </svg>
  );
};
