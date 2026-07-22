import type { SVGProps } from "react";

export const MagnifierPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="16.75"
        y="12.861"
        width="2"
        height="9.778"
        transform="translate(-7.352 17.75) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m10,2C5.589,2,2,5.589,2,10s3.589,8,8,8,8-3.589,8-8S14.411,2,10,2Zm4,9h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
