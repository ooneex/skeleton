import type { SVGProps } from "react";

export const JamIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V11H21V20ZM7 14V20H17V14H7Z"
        fill="currentColor"
      />
      <path d="M20.7812 5H3.21874L2.21912 9H21.7809L20.7812 5Z" fill="currentColor" data-color="color-2" />
      <path
        d="M22 4C22 5.65685 20.6569 7 19 7H5C3.34315 7 2 5.65685 2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
