import type { SVGProps } from "react";

export const PolaroidMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 38C44 41.3137 41.3137 44 38 44L10 44C6.68629 44 4 41.3137 4 38L4 10C4 6.68629 6.68629 4 10 4L38 4C41.3137 4 44 6.68629 44 10L44 38ZM9 35L39 35L39 9L9 9L9 35Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 23.5L18 23.5L18 20.5L30 20.5L30 23.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
