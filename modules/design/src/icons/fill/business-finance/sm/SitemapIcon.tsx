import type { SVGProps } from "react";

export const SitemapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 17C2.34315 17 1 18.3431 1 20C1 21.6569 2.34315 23 4 23C5.65685 23 7 21.6569 7 20C7 18.3431 5.65685 17 4 17Z"
        fill="currentColor"
      />
      <path
        d="M12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17Z"
        fill="currentColor"
      />
      <path
        d="M20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11H21V15H19V13H5V15H3V11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 9V15H11V9H13Z" fill="currentColor" data-color="color-2" />
      <path d="M9.5 2V7H14.5V2H9.5Z" fill="currentColor" />
    </svg>
  );
};
