import type { SVGProps } from "react";

export const TextToolIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 16V34H22.5V16H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 16H32V19H16V16Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5 7.5H36.5V10.5H11.5V7.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5 37.5H36.5V40.5H11.5V37.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5 11.5L40.5 11.5L40.5 36.5L37.5 36.5L37.5 11.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 11.5L10.5 11.5L10.5 36.5L7.5 36.5L7.5 11.5Z"
        fill="currentColor"
      />
      <path d="M4 34H14V44H4V34Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 34H44V44H34V34Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H14V14H4V4Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 4H44V14H34V4Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
