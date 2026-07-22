import type { SVGProps } from "react";

export const SignalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="17" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <rect x="8" y="12" width="2" height="10" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="14" y="7" width="2" height="15" strokeWidth="0" fill="currentColor" />
      <rect x="20" y="2" width="2" height="20" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
