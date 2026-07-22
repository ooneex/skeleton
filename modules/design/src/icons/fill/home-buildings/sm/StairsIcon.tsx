import type { SVGProps } from "react";

export const StairsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 3H22V22H3V15H9V9H15V3Z" fill="currentColor" />
    </svg>
  );
};
