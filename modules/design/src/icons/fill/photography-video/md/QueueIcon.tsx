import type { SVGProps } from "react";

export const QueueIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="3" width="30" height="10" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="19" width="30" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="27" width="30" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
