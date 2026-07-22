import type { SVGProps } from "react";

export const RoadSignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2L18 2L18 9L14 9V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 19L18 19L18 30L14 30L14 19Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 17L6.54202 17L1.79692 11.5L6.54202 6L28 6L28 17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
