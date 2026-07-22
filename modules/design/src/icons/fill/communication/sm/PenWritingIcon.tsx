import type { SVGProps } from "react";

export const PenWritingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="20" width="22" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m18.875,2.125c-1.492-1.492-3.922-1.492-5.414,0L4.079,11.507l-1.354,6.768,6.768-1.354,9.382-9.382c1.493-1.492,1.493-3.922,0-5.414Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
