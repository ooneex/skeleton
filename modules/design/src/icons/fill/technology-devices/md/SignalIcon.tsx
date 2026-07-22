import type { SVGProps } from "react";

export const SignalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="3" y="24" width="2" height="6" strokeWidth="0" fill="currentColor" />
      <rect x="11" y="17" width="2" height="13" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="19" y="10" width="2" height="20" strokeWidth="0" fill="currentColor" />
      <rect x="27" y="2" width="2" height="28" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
