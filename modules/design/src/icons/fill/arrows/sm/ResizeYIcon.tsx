import type { SVGProps } from "react";

export const ResizeYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 5.5L13 18.5L11 18.5L11 5.5L13 5.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 3L3 3L3 0.999999L21 1L21 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 23L3 23L3 21L21 21L21 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08576 16L12 20.9142L16.9142 16L15.5 14.5858L12 18.0858L8.49997 14.5858L7.08576 16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08576 7.99997L12 3.08576L16.9142 7.99997L15.5 9.41418L12 5.91418L8.49997 9.41418L7.08576 7.99997Z"
        fill="currentColor"
      />
    </svg>
  );
};
