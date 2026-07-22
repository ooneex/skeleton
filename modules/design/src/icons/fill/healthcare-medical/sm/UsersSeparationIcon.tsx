import type { SVGProps } from "react";

export const UsersSeparationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m7.413,22H2.587l-.54-5.933-1.63-1.087.752-5.013c.116-.776.666-1.412,1.4-1.622,1.612-.46,3.249-.46,4.862,0,.734.209,1.284.845,1.4,1.621l.752,5.013-1.63,1.087-.54,5.933Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="5" cy="4.5" r="2.5" strokeWidth="0" fill="currentColor" />
      <circle cx="19" cy="4.5" r="2.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m21.413,22h-4.826l-.54-5.933-1.63-1.087.752-5.013c.116-.776.666-1.412,1.4-1.622,1.612-.46,3.249-.46,4.862,0,.734.209,1.284.845,1.4,1.621l.752,5.013-1.63,1.087-.54,5.933Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="11" y="1" width="2" height="22" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
