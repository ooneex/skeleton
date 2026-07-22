import type { SVGProps } from "react";

export const TextSizeIncreaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 4V28H15V4H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4H27V6H5V4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 15L31 15V17L19 17V15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 22L24 10L26 10L26 22L24 22Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
