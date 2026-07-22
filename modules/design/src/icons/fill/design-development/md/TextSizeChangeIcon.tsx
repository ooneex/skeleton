import type { SVGProps } from "react";

export const TextSizeChangeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 2H25V4H1V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2V30H12V2H14Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 8.58578L30.9142 14.5L29.5 15.9142L25 11.4142L20.5 15.9142L19.0858 14.5L25 8.58578Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 19.5858L25 24.0858L29.5 19.5858L30.9142 21L25 26.9142L19.0858 21L20.5 19.5858Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
