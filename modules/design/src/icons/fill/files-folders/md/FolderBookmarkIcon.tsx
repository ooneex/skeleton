import type { SVGProps } from "react";

export const FolderBookmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 18C18.5 16.3431 19.8431 15 21.5 15H28.5C30.1569 15 31.5 16.3431 31.5 18V29.9638L25 25.2365L18.5 29.9638V18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M1 7C1 4.79086 2.79086 3 5 3H13.6L17.8 7H27C29.2091 7 31 8.79086 31 11V13.6689C30.2646 13.2435 29.4107 13 28.5 13H21.5C18.7386 13 16.5 15.2386 16.5 18V28H5C2.79086 28 1 26.2091 1 24V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
