import type { SVGProps } from "react";

export const RulerArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 15L1 15L0.999999 28L31 28L31 15ZM12 17L10 17L10 21L12 21L12 17ZM22 17L22 21L20 21L20 17L22 17ZM5 17L7 17L7 24L5 24L5 17ZM15 17L15 24L17 24L17 17L15 17ZM25 17L27 17L27 24L25 24L25 17Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M29 8.5H3V6.5H29V8.5Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 12.4143L30.4142 7.50009L25.5 2.58588L24.0858 4.00009L27.5858 7.50009L24.0858 11.0001L25.5 12.4143Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 12.4143L1.58579 7.50009L6.5 2.58588L7.91421 4.00009L4.41421 7.50009L7.91421 11.0001L6.5 12.4143Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
