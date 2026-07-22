import type { SVGProps } from "react";

export const CameraRollIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3333 4L8.33331 4L8.33331 2L14.3333 2L14.3333 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M29 14C27.8954 14 27 14.8954 27 16L27 25L22 25L22 7L32 7L32 14L29 14Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 25C20 27.2091 18.2091 29 16 29L6 29C3.79086 29 2 27.2091 2 25V7C2 4.79086 3.79086 3 6 3H16C18.2091 3 20 4.79086 20 7L20 25ZM9 9H7V23H9V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
