import type { SVGProps } from "react";

export const ArrowTriangleLineUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 44L22.5 19.5L25.5 19.5L25.5 44L22.5 44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.5L24 5L36 21.5L12 21.5Z" fill="currentColor" />
    </svg>
  );
};
