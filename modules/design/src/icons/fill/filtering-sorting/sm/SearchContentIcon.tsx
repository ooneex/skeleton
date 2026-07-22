import type { SVGProps } from "react";

export const SearchContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="8" width="8" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="14" width="8" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="20" width="17" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="2" width="17" height="2" strokeWidth="0" fill="currentColor" />
      <path
        d="m23.414,18l-3.247-3.247c.524-.791.833-1.736.833-2.753,0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5c1.017,0,1.962-.309,2.753-.833l3.247,3.247,1.414-1.414Zm-10.414-6c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
