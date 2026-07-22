import type { SVGProps } from "react";

export const NoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm-7,12h-7v-2h7v2Zm5-4H6v-2h12v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
