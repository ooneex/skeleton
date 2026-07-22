import type { SVGProps } from "react";

export const Heading5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4H23V6H16V9.25H18.625C21.5935 9.25 24 11.6565 24 14.625C24 17.5935 21.5935 20 18.625 20H14V18H18.625C20.489 18 22 16.489 22 14.625C22 12.761 20.489 11.25 18.625 11.25H14V4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 11H12V13H1V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 4V20H1V4H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4V20H10V4H12Z" fill="currentColor" />
    </svg>
  );
};
