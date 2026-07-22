import type { SVGProps } from "react";

export const TreadmillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 8V10H15V8H20Z" fill="currentColor" data-color="color-2" />
      <path d="M24 25H26V29H24V25Z" fill="currentColor" data-color="color-2" />
      <path d="M6 25H8V29H6V25Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 18C29.2091 18 31 19.7909 31 22C31 24.7614 28.7614 27 26 27H4.5C2.567 27 1 25.433 1 23.5C1 22.1193 2.11929 21 3.5 21H16.1445L21.6445 18H27ZM26.5 21C25.6716 21 25 21.6716 25 22.5C25 23.3284 25.6716 24 26.5 24C27.3284 24 28 23.3284 28 22.5C28 21.6716 27.3284 21 26.5 21Z"
        fill="currentColor"
      />
      <path
        d="M23.3154 3.00196C24.0652 2.08789 25.4404 2.02046 26.2764 2.85646L27.7148 4.29493L24 9.00001L26.457 16H20.5117L19.002 8.26173L23.3154 3.00196Z"
        fill="currentColor"
      />
    </svg>
  );
};
