import type { SVGProps } from "react";

export const ServiceBellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M25.5 7V13H22.5V7H25.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C36.1367 12 46 21.7021 46 33.7002V37H2V33.7002C2 21.7021 11.8633 12 24 12ZM24 18.5C17.9131 18.5001 12.62 21.9005 10.0859 26.8828L9.84961 27.3691L9.21973 28.7305L11.9414 29.9912L12.5723 28.6309L12.7607 28.2422C14.7834 24.2667 19.0419 21.5001 24 21.5H25.5V18.5H24Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M46 40V43H2V40H46Z" fill="currentColor" />
      <path d="M31 6V9H17V6H31Z" fill="currentColor" />
    </svg>
  );
};
