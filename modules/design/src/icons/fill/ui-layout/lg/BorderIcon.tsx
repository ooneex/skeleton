import type { SVGProps } from "react";

export const BorderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 4V44H4V4H44ZM25.5 10V17H22.5V10H25.5ZM25.5 31H22.5V38H25.5V31ZM38 25.5H31V22.5H38V25.5ZM17 25.5V22.5H10V25.5H17Z"
        fill="currentColor"
      />
    </svg>
  );
};
