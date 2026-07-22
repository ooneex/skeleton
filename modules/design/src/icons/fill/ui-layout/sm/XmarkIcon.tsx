import type { SVGProps } from "react";

export const XmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="11"
        y="1.101"
        width="2"
        height="21.799"
        transform="translate(-4.971 12) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect
        x="1.101"
        y="11"
        width="21.799"
        height="2"
        transform="translate(-4.971 12) rotate(-45)"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
