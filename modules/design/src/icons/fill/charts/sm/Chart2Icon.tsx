import type { SVGProps } from "react";

export const Chart2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="13" width="6" height="8" strokeWidth="0" fill="currentColor" />
      <rect x="9" y="8" width="6" height="13" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="17" y="3" width="6" height="18" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
