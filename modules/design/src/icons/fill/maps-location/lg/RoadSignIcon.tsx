import type { SVGProps } from "react";

export const RoadSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 3L20 45H28L26 3H22Z" fill="currentColor" />
      <path d="M18.3776 16H6.5L1.5 21L6.5 26H17.9014L18.3776 16Z" fill="currentColor" data-color="color-2" />
      <path d="M29.6224 16H41.5L46.5 11L41.5 6H29.1463L29.6224 16Z" fill="currentColor" data-color="color-2" />
      <path d="M30.5748 36H41.5L46.5 31L41.5 26H30.0986L30.5748 36Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 43H31V46H17V43Z" fill="currentColor" />
    </svg>
  );
};
