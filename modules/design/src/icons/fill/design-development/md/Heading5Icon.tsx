import type { SVGProps } from "react";

export const Heading5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 5H31V7H21V13H25C28.866 13 32 16.134 32 20C32 23.866 28.866 27 25 27H19V25H25C27.7614 25 30 22.7614 30 20C30 17.2386 27.7614 15 25 15H19V5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 15H15V17H1V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5V27H1V5H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 5V27H13V5H15Z" fill="currentColor" />
    </svg>
  );
};
