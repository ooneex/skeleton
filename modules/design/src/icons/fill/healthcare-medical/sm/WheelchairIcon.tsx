import type { SVGProps } from "react";

export const WheelchairIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,18h-2v-3c0-.551-.449-1-1-1h-4.257v-2h4.257c1.654,0,3,1.346,3,3v3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="8.5" cy="16.5" r="1.5" strokeWidth="0" fill="currentColor" />
      <circle cx="19" cy="20" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m18,6H7.819l-.678-3.392c-.186-.932-1.011-1.608-1.961-1.608h-2.18v2h2.18l1.647,8.239,1.961-.393-.569-2.847h9.781v-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m8.5,23c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5-2.916,6.5-6.5,6.5Zm0-11c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5,4.5-2.019,4.5-4.5-2.019-4.5-4.5-4.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
