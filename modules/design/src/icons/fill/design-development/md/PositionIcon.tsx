import type { SVGProps } from "react";

export const PositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 0V7H15V0H17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 25V32H15V25H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 17L25 17L25 15L32 15L32 17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 17L-8.74228e-08 17L0 15L7 15L7 17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
