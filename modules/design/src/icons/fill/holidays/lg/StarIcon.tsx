import type { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3L28.8937 18.695H45L32.174 28.372L37.2312 44L24 34.3481L10.7688 44L15.826 28.372L3 18.695H19.1063L24 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
