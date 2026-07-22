import type { SVGProps } from "react";

export const WardrobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15V23L6 23C4.34314 23 3 21.6569 3 20V15H11ZM8.01001 20L8.01001 18L6.00001 18L6.00001 20L8.01001 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M11 1H6C4.34315 1 3 2.34315 3 4V13H11V1Z" fill="currentColor" />
      <path
        d="M18 23L13 23V15H15.01L15.01 10H13V1H18C19.6569 1 21 2.34315 21 4L21 20C21 21.6569 19.6569 23 18 23Z"
        fill="currentColor"
      />
    </svg>
  );
};
