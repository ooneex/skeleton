import type { SVGProps } from "react";

export const CameraRollIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 8L19 6L14 6L14 8L12 8L12 4L21 4L21 8L19 8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 11L46 21L44 21C41.7909 21 40 22.7909 40 25L40 37L32 37L32 11L46 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 37C29 39.7614 26.7614 42 24 42H9C6.23858 42 4 39.7614 4 37L4 11C4 8.23858 6.23858 6 9 6H24C26.7614 6 29 8.23857 29 11L29 37ZM11.5 14H8.5V34H11.5V14Z"
        fill="currentColor"
      />
    </svg>
  );
};
