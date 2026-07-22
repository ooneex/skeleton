import type { SVGProps } from "react";

export const FolderAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 16V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34314 27 5 27H13.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 28H18.398C17.327 28 16.655 26.842 17.186 25.912L22.788 16.108C23.324 15.17 24.676 15.17 25.211 16.108L30.813 25.912C31.345 26.842 30.673 28 29.601 28H27.999"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 21V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 29C24.6904 29 25.25 28.4404 25.25 27.75C25.25 27.0596 24.6904 26.5 24 26.5C23.3096 26.5 22.75 27.0596 22.75 27.75C22.75 28.4404 23.3096 29 24 29Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
