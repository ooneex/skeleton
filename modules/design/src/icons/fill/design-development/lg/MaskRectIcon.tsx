import type { SVGProps } from "react";

export const MaskRectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 11L39 11L39 37L20 37L20 11Z" fill="currentColor" data-color="color-2" />
      <path d="M2 11L16 11L16 37L2 37L2 11Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 2H46V46H19V2ZM22 5V43H43V5H22Z" fill="currentColor" />
    </svg>
  );
};
