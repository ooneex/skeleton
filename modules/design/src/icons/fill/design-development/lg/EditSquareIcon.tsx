import type { SVGProps } from "react";

export const EditSquareIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7.5H35.5V10.5H12.5V7.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 37.5H35.5V40.5H12.5V37.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5 12.5L40.5 12.5L40.5 35.5L37.5 35.5L37.5 12.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 12.5L10.5 12.5L10.5 35.5L7.5 35.5L7.5 12.5Z"
        fill="currentColor"
      />
      <path d="M14 4H4V14H14V4Z" fill="currentColor" data-color="color-2" />
      <path d="M14 34H4V44H14V34Z" fill="currentColor" data-color="color-2" />
      <path d="M44 4H34V14H44V4Z" fill="currentColor" data-color="color-2" />
      <path d="M44 34H34V44H44V34Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
