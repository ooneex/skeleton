import type { SVGProps } from "react";

export const AlertInfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m17,29h-2V11.5c0-.276-.225-.5-.5-.5h-3.5v-2h3.5c1.379,0,2.5,1.122,2.5,2.5v17.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="16" cy="4" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
