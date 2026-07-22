import type { SVGProps } from "react";

export const FogIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 30.5L31 30.5V33.5H11L11 30.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 22.5L46 22.5V25.5L17 25.5V22.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 38.5H34V41.5H19V38.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6.5L24 6.5V9.5L9 9.5L9 6.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 14.5L32 14.5V17.5L12 17.5L12 14.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 30.5H42V33.5H36V30.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 14.5H7V17.5H2V14.5Z" fill="currentColor" />
    </svg>
  );
};
