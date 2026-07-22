import type { SVGProps } from "react";

export const FolderLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 14V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34315 27 5 27H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28.5 21H19.5C18.6716 21 18 21.6716 18 22.5V26.5C18 27.3284 18.6716 28 19.5 28H28.5C29.3284 28 30 27.3284 30 26.5V22.5C30 21.6716 29.3284 21 28.5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 21V18C21 16.3431 22.3431 15 24 15V15C25.6569 15 27 16.3431 27 18V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
