import type { SVGProps } from "react";

export const LineHeightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M44 43.5L4 43.5L4 40.5L44 40.5L44 43.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 4.5L44 7.5L4 7.5L4 4.5L44 4.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 29.5H17.5V26.5H30.5V29.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4112 12H25.5915L34.8519 36H30.8244V33.8957L23.997 16.2011L17.0884 33.9753V36H13.0828L22.4112 12Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
