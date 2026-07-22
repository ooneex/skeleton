import type { SVGProps } from "react";

export const PunchingBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9.5 6L11.5 1" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12.5 1L14.5 6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 18H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 11H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 8C17 6.89543 16.1046 6 15 6H12H9C7.89543 6 7 6.89543 7 8V21C7 22.1046 7.89543 23 9 23H15C16.1046 23 17 22.1046 17 21V8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M7 1H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
