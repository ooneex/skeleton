import type { SVGProps } from "react";

export const MessageBubbleUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m19,22H3c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h6v2H3c-.552,0-1,.449-1,1v12c0,.551.448,1,1,1h16c.552,0,1-.449,1-1v-7h2v7c0,1.654-1.346,3-3,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m21,0h-7c-1.654,0-3,1.346-3,3v4c0,1.654,1.346,3,3,3v4l5.333-4h1.667c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="7" cy="11" r="3" strokeWidth="0" fill="currentColor" />
      <path
        d="m7,15c-2.875,0-5.274,2.023-5.86,4.722.29.747,1.011,1.278,1.86,1.278h10c0-3.314-2.686-6-6-6Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
