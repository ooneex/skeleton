import type { SVGProps } from "react";

export const CaretMaximizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 4L3.99994 4L3.99993 21L21 4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M27 44L44.0001 44L44.0001 27L27 44Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 4L44.0001 4L44.0001 21L27 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 44L3.99994 44L3.99993 27L21 44Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
