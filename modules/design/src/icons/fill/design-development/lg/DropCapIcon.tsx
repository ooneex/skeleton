import type { SVGProps } from "react";

export const DropCapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 17.5H7.5V14.5H15.5V17.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0279 5H12.9709L18.8348 21H15V19.2546L11.5016 9.70896L8.00001 19.2938V21H4.18277L10.0279 5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 16.5H24V19.5H44V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 4.5H24V7.5H44V4.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 28.5H4V31.5H44V28.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 40.5H4V43.5H44V40.5Z" fill="currentColor" />
    </svg>
  );
};
