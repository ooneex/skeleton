import type { SVGProps } from "react";

export const UserFocusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="7.75" r="2.75" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path d="m4,5c0-.551.449-1,1-1h4v-2h-4c-1.654,0-3,1.346-3,3v4h2v-4Z" strokeWidth="0" fill="currentColor" />
      <path d="m19,2h-4v2h4c.551,0,1,.449,1,1v4h2v-4c0-1.654-1.346-3-3-3Z" strokeWidth="0" fill="currentColor" />
      <path d="m20,19c0,.551-.449,1-1,1h-4v2h4c1.654,0,3-1.346,3-3v-4h-2v4Z" strokeWidth="0" fill="currentColor" />
      <path d="m4,19v-4h-2v4c0,1.654,1.346,3,3,3h4v-2h-4c-.551,0-1-.449-1-1Z" strokeWidth="0" fill="currentColor" />
      <path
        d="m6.557,16.889l-.125,1.111h11.137l-.125-1.111c-.312-2.787-2.653-4.889-5.443-4.889s-5.131,2.102-5.443,4.889Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
