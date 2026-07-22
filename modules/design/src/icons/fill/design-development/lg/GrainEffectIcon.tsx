import type { SVGProps } from "react";

export const GrainEffectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 34H14V44H4V34Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 34H34V44H24V34Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 14H14V24H4V14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H14V14H4V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 4H24V14H14V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 4H44V14H34V4Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 24H24V34H14V24Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 24H44V34H34V24Z" fill="currentColor" />
    </svg>
  );
};
