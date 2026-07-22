import type { SVGProps } from "react";

export const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 8.5V9H39C39 6.23858 36.7614 4 34 4H9C6.23858 4 4 6.23858 4 9V38.0001C4 41.3138 6.68629 44.0001 10 44.0001H38C41.3137 44.0001 44 41.3138 44 38.0001V18C44 14.6863 41.3137 12 38 12H9.5C8.11929 12 7 10.8807 7 9.5C7 8.11929 8.11929 7 9.5 7H34.5C35.3284 7 36 7.67157 36 8.5ZM41 33H34.9592C32.2201 33 30 30.7617 30 28C30 25.2383 32.2201 23 34.9592 23H41V33Z"
        fill="currentColor"
      />
    </svg>
  );
};
