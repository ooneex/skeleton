import type { SVGProps } from "react";

export const TransparentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H14V14H4V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 4H44V14H34V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 24H14V34H4V24Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 24H44V34H34V24Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 24H24V34H14V24Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 14H24V24H14V14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 14H34V24H24V14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 14H44V24H34V14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 34H14V44H4V34Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 34H44V44H34V34Z" fill="currentColor" />
    </svg>
  );
};
