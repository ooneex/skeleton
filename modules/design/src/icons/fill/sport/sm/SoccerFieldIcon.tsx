import type { SVGProps } from "react";

export const SoccerFieldIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 14H1V10H4V14Z" fill="currentColor" data-color="color-2" />
      <path d="M23 14H20V10H23V14Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M11 8.12598C9.27477 8.57002 8 10.1362 8 12C8 13.8638 9.27477 15.43 11 15.874V21H1V16H6V8H1V3H11V8.12598Z"
        fill="currentColor"
      />
      <path
        d="M23 8H18V16H23V21H13V15.874C14.7252 15.43 16 13.8638 16 12C16 10.1362 14.7252 8.57002 13 8.12598V3H23V8Z"
        fill="currentColor"
      />
    </svg>
  );
};
