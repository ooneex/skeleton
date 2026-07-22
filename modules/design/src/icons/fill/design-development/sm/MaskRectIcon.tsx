import type { SVGProps } from "react";

export const MaskRectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 17L19 7L11 7L11 17L19 17Z" fill="currentColor" data-color="color-2" />
      <path d="M1 7L1 17L7 17L7 7L1 7Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 2H23V22H9V2ZM11 4V20H21V4H11Z" fill="currentColor" />
    </svg>
  );
};
