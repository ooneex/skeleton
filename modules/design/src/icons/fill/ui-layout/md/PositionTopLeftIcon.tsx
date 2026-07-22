import type { SVGProps } from "react";

export const PositionTopLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 18L18 18L18 2L2 2L2 18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <circle cx="28.5" cy="3.5" r="1.5" transform="rotate(90 28.5 3.5)" fill="currentColor" />
      <circle cx="22.5" cy="3.5" r="1.5" transform="rotate(90 22.5 3.5)" fill="currentColor" />
      <circle cx="28.5" cy="9.75" r="1.5" transform="rotate(90 28.5 9.75)" fill="currentColor" />
      <path
        d="M28.5 17.5C27.6716 17.5 27 16.8284 27 16C27 15.1716 27.6716 14.5 28.5 14.5C29.3284 14.5 30 15.1716 30 16C30 16.8284 29.3284 17.5 28.5 17.5Z"
        fill="currentColor"
      />
      <circle cx="28.5" cy="22.25" r="1.5" transform="rotate(90 28.5 22.25)" fill="currentColor" />
      <circle cx="1.5" cy="1.5" r="1.5" transform="matrix(-4.37114e-08 1 1 4.37114e-08 2 21)" fill="currentColor" />
      <circle cx="28.5" cy="28.5" r="1.5" transform="rotate(90 28.5 28.5)" fill="currentColor" />
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
