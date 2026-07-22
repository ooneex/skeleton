import type { SVGProps } from "react";

export const QueueIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="10" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="15" width="20" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="20" width="20" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
