import type { SVGProps } from "react";

export const EscalatorDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m7,16h-2v-5.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v1h-2v-1c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v5.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="8.5" cy="3" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m20,6h-3.232c-.742,0-1.455.273-2.007.77L5.616,15h-1.616c-2.206,0-4,1.794-4,4s1.794,4,4,4h3.232c.742,0,1.455-.273,2.006-.77l9.145-8.23h1.616c2.206,0,4-1.794,4-4s-1.794-4-4-4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="23.414 18 22 16.586 19 19.586 19 17 17 17 17 23 23 23 23 21 20.414 21 23.414 18"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
