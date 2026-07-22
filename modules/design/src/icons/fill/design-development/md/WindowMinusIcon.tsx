import type { SVGProps } from "react";

export const WindowMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m27,3H5c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4ZM6.5,10c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm3.5-1.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Zm11,8.5h-10v-2h10v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
