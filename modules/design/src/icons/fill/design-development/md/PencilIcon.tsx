import type { SVGProps } from "react";

export const PencilIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m28.964,3.036c-2.044-2.044-5.37-2.044-7.414,0L3.597,20.989l-2.472,9.886,9.886-2.472L28.964,10.45c2.044-2.044,2.044-5.37,0-7.414ZM9.989,26.597l-6.114,1.528,1.528-6.114,14.628-14.628,1.586,1.586-14.281,14.281,1.414,1.414,14.281-14.281,1.586,1.586-14.628,14.628Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
