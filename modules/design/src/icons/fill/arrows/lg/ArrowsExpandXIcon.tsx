import type { SVGProps } from "react";

export const ArrowsExpandXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1213 33L5.12134 24L14.1213 15L12 12.8787L0.878698 24L12 35.1213L14.1213 33Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 25.5L3 25.5L3 22.5L21 22.5L21 25.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8787 33L42.8787 24L33.8787 15L36 12.8787L47.1213 24L36 35.1213L33.8787 33Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 25.5L45 25.5L45 22.5L27 22.5L27 25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
