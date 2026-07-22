import type { SVGProps } from "react";

export const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,11.882l11-5.5v-.382c0-1.654-1.346-3-3-3H4c-1.654,0-3,1.346-3,3v.382l11,5.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m12,14.118L1,8.618v9.382c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3v-9.382l-11,5.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
