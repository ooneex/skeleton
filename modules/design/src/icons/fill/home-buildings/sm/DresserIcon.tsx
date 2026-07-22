import type { SVGProps } from "react";

export const DresserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 19V23H5V19H7Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 19V23H17V19H19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 11H1V6C1 4.34314 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6L23 11ZM14 9V7H10V9H14Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 21V13H23L23 21H1ZM14 17V15L10 15V17H14Z" fill="currentColor" />
    </svg>
  );
};
