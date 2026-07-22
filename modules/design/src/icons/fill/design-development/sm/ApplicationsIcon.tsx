import type { SVGProps } from "react";

export const ApplicationsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.5,22H3.5c-1.378,0-2.5-1.122-2.5-2.5V6.5c0-1.378,1.122-2.5,2.5-2.5h7.5v8h8v7.5c0,1.378-1.122,2.5-2.5,2.5Zm-5.5-2h5.5c.276,0,.5-.224.5-.5v-5.5h-6v6ZM3,14v5.5c0,.276.224.5.5.5h5.5v-6H3Zm0-2h6v-6H3.5c-.276,0-.5.224-.5.5v5.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m20.5,0h-7.5v10h10V2.5c0-1.378-1.122-2.5-2.5-2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
