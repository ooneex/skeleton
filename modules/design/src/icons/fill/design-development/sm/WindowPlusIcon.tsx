import type { SVGProps } from "react";

export const WindowPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm-15.25,5.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25Zm2.75-1.25c0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25Zm8.5,7h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
