import type { SVGProps } from "react";

export const Grid2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22.346,4.836l-3.182-3.182c-.779-.78-2.049-.78-2.828,0l-3.182,3.182c-.78.78-.78,2.048,0,2.828l3.182,3.182c.39.39.902.585,1.414.585s1.024-.195,1.414-.585l3.182-3.182c.78-.78.78-2.048,0-2.828Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
