import type { SVGProps } from "react";

export const LockOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m9,11h-2v-6c0-2.757,2.243-5,5-5s5,2.243,5,5v1h-2v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v6Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m19,9H5c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-8c0-1.654-1.346-3-3-3Zm-6,7.722v2.278h-2v-2.278c-.595-.347-1-.985-1-1.722,0-1.103.897-2,2-2s2,.897,2,2c0,.737-.405,1.375-1,1.722Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
