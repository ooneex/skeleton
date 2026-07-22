import type { SVGProps } from "react";

export const Heading1Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6492 4H23V20H21V6.28062L15.8438 10.4056L14.5944 8.84383L20.6492 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 11H12V13H1V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 4V20H1V4H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4V20H10V4H12Z" fill="currentColor" />
    </svg>
  );
};
