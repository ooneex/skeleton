import type { SVGProps } from "react";

export const Bicycle3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 6H25.5C26.8807 6 28 7.11929 28 8.5C28 9.6369 27.2411 10.5965 26.2023 10.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="25.5"
        cy="21.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="6.5"
        cy="21.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M6.5 21.5L9 12H23H21.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M25.5 21.5L21.5 6H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
