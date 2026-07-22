import type { SVGProps } from "react";

export const HashtagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 15H21V17H2V15Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 7H22V9H3V7Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6373 1.15947L7.34065 23.1373L5.36277 22.8407L8.65946 0.862793L10.6373 1.15947Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6373 1.15947L15.3406 23.1373L13.3628 22.8407L16.6595 0.862793L18.6373 1.15947Z"
        fill="currentColor"
      />
    </svg>
  );
};
