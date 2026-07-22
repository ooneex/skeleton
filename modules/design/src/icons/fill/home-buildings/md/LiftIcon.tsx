import type { SVGProps } from "react";

export const LiftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 30H21V2L12.5 2L12.5 30Z" fill="currentColor" />
      <path d="M10.5 2H2V30H10.5L10.5 2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 7.58578L30.9142 11.5L29.5 12.9142L27 10.4142L24.5 12.9142L23.0858 11.5L27 7.58578Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 24.4142L30.9142 20.5L29.5 19.0858L27 21.5858L24.5 19.0858L23.0858 20.5L27 24.4142Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
