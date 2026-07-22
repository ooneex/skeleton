import type { SVGProps } from "react";

export const CaretExpandXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31.7437 16L18.9999 24.9207L18.9999 7.07935L31.7437 16Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.256103 16L12.9999 7.07934L12.9999 24.9207L0.256103 16Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
