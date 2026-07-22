import type { SVGProps } from "react";

export const ComposeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m26,30H6c-2.206,0-4-1.794-4-4V6c0-2.206,1.794-4,4-4h15v2H6c-1.103,0-2,.897-2,2v20c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-15h2v15c0,2.206-1.794,4-4,4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect
        x="10.894"
        y="8.5"
        width="23.213"
        height="2"
        transform="translate(-.127 18.692) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
