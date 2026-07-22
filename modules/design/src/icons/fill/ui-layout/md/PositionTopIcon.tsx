import type { SVGProps } from "react";

export const PositionTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13L30 13L30 2L2 2L2 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <circle cx="28.5" cy="28.5" r="1.5" transform="rotate(-180 28.5 28.5)" fill="currentColor" />
      <circle cx="28.5" cy="22.5" r="1.5" transform="rotate(-180 28.5 22.5)" fill="currentColor" />
      <circle cx="3.5" cy="22.5" r="1.5" transform="rotate(-180 3.5 22.5)" fill="currentColor" />
      <circle cx="28.5" cy="16.5" r="1.5" transform="rotate(-180 28.5 16.5)" fill="currentColor" />
      <circle cx="3.5" cy="16.5" r="1.5" transform="rotate(-180 3.5 16.5)" fill="currentColor" />
      <circle cx="22.25" cy="28.5" r="1.5" transform="rotate(-180 22.25 28.5)" fill="currentColor" />
      <path
        d="M14.5 28.5C14.5 27.6716 15.1716 27 16 27C16.8284 27 17.5 27.6716 17.5 28.5C17.5 29.3284 16.8284 30 16 30C15.1716 30 14.5 29.3284 14.5 28.5Z"
        fill="currentColor"
      />
      <circle cx="9.75" cy="28.5" r="1.5" transform="rotate(-180 9.75 28.5)" fill="currentColor" />
      <circle cx="3.5" cy="28.5" r="1.5" transform="rotate(-180 3.5 28.5)" fill="currentColor" />
    </svg>
  );
};
