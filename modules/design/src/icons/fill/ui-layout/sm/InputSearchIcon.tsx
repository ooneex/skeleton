import type { SVGProps } from "react";

export const InputSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="11" r="1.25" strokeWidth="0" fill="currentColor" />
      <circle cx="7.25" cy="11" r="1.25" strokeWidth="0" fill="currentColor" />
      <path
        d="m11,18h-7c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v4.5h-2v-4.5c0-.551-.448-1-1-1H4c-.552,0-1,.449-1,1v8c0,.551.448,1,1,1h7v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m23.939,21.525l-2.614-2.614c.437-.693.7-1.508.7-2.386,0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5c.879,0,1.693-.263,2.386-.7l2.614,2.614,1.414-1.414Zm-8.914-5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
