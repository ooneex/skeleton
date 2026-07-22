import type { SVGProps } from "react";

export const FolderUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 27H5C3.34315 27 2 25.6569 2 24V7C2 5.34315 3.34315 4 5 4H13.2L17.4 8H27C28.6569 8 30 9.34315 30 11V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 20C26.3807 20 27.5 18.8807 27.5 17.5C27.5 16.1193 26.3807 15 25 15C23.6193 15 22.5 16.1193 22.5 17.5C22.5 18.8807 23.6193 20 25 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 23C21.6863 23 19 25.6863 19 29H31C31 25.6863 28.3137 23 25 23Z"
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
