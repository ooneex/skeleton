import type { SVGProps } from "react";

export const Compass4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 23V20.99H11V23H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1V3.01H11V1H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 13L3.01 13L3.01001 11L1.00001 11L1 13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 13L20.99 13L20.99 11L23 11L23 13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8144 16.8143L20.4252 3.57471L7.18558 7.18552L3.57477 20.4251L16.8144 16.8143ZM12 10.4999C11.1716 10.4999 10.5 11.1715 10.5 11.9999C10.5 12.8284 11.1716 13.4999 12 13.4999C12.8284 13.4999 13.5 12.8284 13.5 11.9999C13.5 11.1715 12.8284 10.4999 12 10.4999Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
