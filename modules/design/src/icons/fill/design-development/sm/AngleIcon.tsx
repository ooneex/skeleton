import type { SVGProps } from "react";

export const AngleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 22L2 22L2 2L4 2L4 20L22 20L22 22Z" fill="currentColor" />
      <path d="M7 8H6V18H16V17C16 12.0294 11.9706 8 7 8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
