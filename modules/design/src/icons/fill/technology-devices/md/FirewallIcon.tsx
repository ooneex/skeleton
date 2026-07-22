import type { SVGProps } from "react";

export const FirewallIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27.1264 17.8652C27.8123 18.6462 28.5193 19.5716 29.0589 20.5678C29.5949 21.557 30 22.6787 30 23.8345C30 27.7901 26.7445 30 23.75 30C20.7555 30 17.5 27.7901 17.5 23.8345C17.5 23.3176 17.6832 22.0924 17.8408 21.111C18.0185 20.0036 18.2173 18.9 18.4144 17.796L20.3516 18.8359L23.5666 14.5846C24.8428 15.5881 26.0524 16.6422 27.1264 17.8652Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M11 11V2H6C3.79086 2 2 3.79086 2 6V11H11Z" fill="currentColor" />
      <path d="M13 11H19V2H13V11Z" fill="currentColor" />
      <path d="M30 11V6C30 3.79086 28.2091 2 26 2H21V11H30Z" fill="currentColor" />
      <path d="M8.00003 13V19H2V13H8.00003Z" fill="currentColor" />
      <path d="M14 19L14 13H10V19H14Z" fill="currentColor" />
      <path d="M2 26V21H14L14 30H6C3.79086 30 2 28.2091 2 26Z" fill="currentColor" />
    </svg>
  );
};
