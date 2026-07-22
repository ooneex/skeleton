import type { SVGProps } from "react";

export const SockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.9998 12.7119C18.9998 13.8084 18.5496 14.8571 17.7546 15.6123L12.4714 20.6299L5.53101 13.0527L8.99976 9.58496V7H18.9998V12.7119Z"
        fill="currentColor"
      />
      <path
        d="M10.95 21.9434C8.8975 23.2521 6.13599 22.9466 4.42848 21.084C2.7275 19.2282 2.64623 16.4446 4.14528 14.501L10.95 21.9434Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M18.9998 5H8.99976V1H18.9998V5Z" fill="currentColor" />
    </svg>
  );
};
