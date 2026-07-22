import type { SVGProps } from "react";

export const SnowGlobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 16V21H11V16H13Z" fill="currentColor" data-color="color-2" />
      <path
        d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12V19H20V12ZM22 22H2V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V22Z"
        fill="currentColor"
      />
      <path d="M8 17L12 10L16 17H8Z" fill="currentColor" data-color="color-2" />
      <path d="M7.58578 8L9 6.58579L10.4211 8.00691L9.0069 9.42112L7.58578 8Z" fill="currentColor" />
      <path d="M13.5858 8L15 6.58579L16.4211 8.00691L15.0069 9.42112L13.5858 8Z" fill="currentColor" />
      <path d="M15.5858 12L17 10.5858L18.4211 12.0069L17.0069 13.4211L15.5858 12Z" fill="currentColor" />
      <path d="M5.58578 12L7 10.5858L8.42112 12.0069L7.0069 13.4211L5.58578 12Z" fill="currentColor" />
    </svg>
  );
};
