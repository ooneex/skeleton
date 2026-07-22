import type { SVGProps } from "react";

export const ShapeRectangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H30V30H2V2Z" fill="currentColor" />
    </svg>
  );
};
