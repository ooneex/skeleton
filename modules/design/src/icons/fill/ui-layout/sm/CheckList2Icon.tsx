import type { SVGProps } from "react";

export const CheckList2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="6.083 19.497 .586 14 2 12.586 5.917 16.503 17.844 1.594 19.406 2.844 6.083 19.497"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="19" y="7" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="15" y="12" width="8" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="11" y="17" width="12" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
