import type { SVGProps } from "react";

export const MakeupFoundationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 10H16V6H8V10Z" fill="currentColor" data-color="color-2" />
      <path d="M10 0H19V2H14V4H10V0Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8C18.1046 8 19 8.89543 19 10V21C19 22.1046 18.1046 23 17 23H7C5.89543 23 5 22.1046 5 21V10C5 8.89543 5.89543 8 7 8H17ZM9 12V19H15V12H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
