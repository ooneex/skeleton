import type { SVGProps } from "react";

export const GridSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <path
        d="m22.914,21.5l-2.481-2.481c.351-.595.567-1.28.567-2.019,0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4c.74,0,1.424-.215,2.019-.567l2.481,2.481,1.414-1.414Zm-7.914-4.5c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
