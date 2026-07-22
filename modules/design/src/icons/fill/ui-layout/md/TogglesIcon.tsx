import type { SVGProps } from "react";

export const TogglesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m8.5,15h15c3.584,0,6.5-2.916,6.5-6.5s-2.916-6.5-6.5-6.5h-15c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5Zm0-11c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5,2.019-4.5,4.5-4.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m23.5,17h-15c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5h15c3.584,0,6.5-2.916,6.5-6.5s-2.916-6.5-6.5-6.5Zm0,11c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
