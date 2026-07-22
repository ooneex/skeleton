import type { SVGProps } from "react";

export const LinesYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="9" y="10" width="2" height="19" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="15" y="17" width="2" height="12" strokeWidth="0" fill="currentColor" />
      <rect x="21" y="10" width="2" height="19" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="27" y="17" width="2" height="12" strokeWidth="0" fill="currentColor" />
      <rect x="3" y="3" width="2" height="26" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
