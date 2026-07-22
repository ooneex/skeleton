import type { SVGProps } from "react";

export const CaretMaximizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9143 2L1.99999 2.00007L1.99999 13.9142L13.9143 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0857 30.0001L30 30.0001L30 18.0859L18.0857 30.0001Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0857 2L30 2.00007L30 13.9142L18.0857 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9143 30L1.99999 29.9999L1.99999 18.0858L13.9143 30Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
