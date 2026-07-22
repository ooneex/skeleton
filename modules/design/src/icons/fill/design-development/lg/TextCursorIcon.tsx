import type { SVGProps } from "react";

export const TextCursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 28H33V31H15V28Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 43L17 43C20.0376 43 22.5 40.5376 22.5 37.5L22.5 10.5C22.5 7.46243 20.0376 5 17 5L15 5L15 2L17 2C21.6944 2 25.5 5.80558 25.5 10.5L25.5 37.5C25.5 42.1944 21.6944 46 17 46L15 46L15 43Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 43L31 43C27.9624 43 25.5 40.5376 25.5 37.5L25.5 10.5C25.5 7.46243 27.9624 5 31 5L33 5L33 2L31 2C26.3056 2 22.5 5.80558 22.5 10.5L22.5 37.5C22.5 42.1944 26.3056 46 31 46L33 46L33 43Z"
        fill="currentColor"
      />
    </svg>
  );
};
