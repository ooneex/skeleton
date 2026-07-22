import type { SVGProps } from "react";

export const Heading4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3768 4H24V20H22V15H14V13.2114L21.3768 4ZM22 13V6.42138L16.7316 13H22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 11H12V13H1V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 4V20H1V4H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4V20H10V4H12Z" fill="currentColor" />
    </svg>
  );
};
