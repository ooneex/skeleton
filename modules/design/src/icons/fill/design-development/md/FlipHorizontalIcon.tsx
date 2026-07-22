import type { SVGProps } from "react";

export const FlipHorizontalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 31L15 1L17 1L17 31L15 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0001 4.32764V25.9999H31.7485L19.0001 4.32764Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9999 4.32764V25.9999H0.251465L12.9999 4.32764Z"
        fill="currentColor"
      />
    </svg>
  );
};
