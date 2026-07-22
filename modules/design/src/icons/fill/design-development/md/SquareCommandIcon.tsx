import type { SVGProps } from "react";

export const SquareCommandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m14,24c0,.551.448,1,1,1s1-.449,1-1v-1h-1c-.552,0-1,.449-1,1Z" strokeWidth="0" fill="currentColor" />
      <path d="m25,15c0-.551-.448-1-1-1s-1,.449-1,1v1h1c.552,0,1-.449,1-1Z" strokeWidth="0" fill="currentColor" />
      <path d="m15,14c-.552,0-1,.449-1,1s.448,1,1,1h1v-1c0-.551-.448-1-1-1Z" strokeWidth="0" fill="currentColor" />
      <rect x="18" y="18" width="3" height="3" strokeWidth="0" fill="currentColor" />
      <path d="m24,25c.552,0,1-.449,1-1s-.448-1-1-1h-1v1c0,.551.448,1,1,1Z" strokeWidth="0" fill="currentColor" />
      <path
        d="m27,8h-15c-2.206,0-4,1.794-4,4v15c0,2.206,1.794,4,4,4h15c2.206,0,4-1.794,4-4v-15c0-2.206-1.794-4-4-4Zm-3,13c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3v-1h-3v1c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3h1v-3h-1c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3v1h3v-1c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3h-1v3h1Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m6,24h-1c-2.206,0-4-1.794-4-4V5C1,2.794,2.794,1,5,1h15c2.206,0,4,1.794,4,4v1h-2v-1c0-1.103-.897-2-2-2H5c-1.103,0-2,.897-2,2v15c0,1.103.897,2,2,2h1v2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
