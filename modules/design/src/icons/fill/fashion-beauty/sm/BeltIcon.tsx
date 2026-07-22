import type { SVGProps } from "react";

export const BeltIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 17H7V7H17V17ZM9 11V13H12V11H9Z" fill="currentColor" />
      <path
        d="M2 8C0.89543 8 0 8.89543 0 10L0.0107422 14.2041C0.113005 15.2128 0.964349 16 2 16H5V8H2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M22 8C23.1046 8 24 8.89543 24 10L23.9893 14.2041C23.887 15.2128 23.0357 16 22 16H19V8H22Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
