import type { SVGProps } from "react";

export const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30L15 3H17L17 30L15 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99991 14.4142L15.9999 4.41418L25.9999 14.4142L27.4141 13L15.9999 1.58576L4.58569 13L5.99991 14.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
