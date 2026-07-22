import type { SVGProps } from "react";

export const XmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="-.556"
        y="15"
        width="33.112"
        height="2"
        transform="translate(-6.627 16) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect
        x="15"
        y="-.556"
        width="2"
        height="33.112"
        transform="translate(-6.627 16) rotate(-45)"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
