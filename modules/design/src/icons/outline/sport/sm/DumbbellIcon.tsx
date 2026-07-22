import type { SVGProps } from "react";

export const DumbbellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M21 12H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 5.5C16 4.11929 17.1193 3 18.5 3V3C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21V21C17.1193 21 16 19.8807 16 18.5V5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 5.5C3 4.11929 4.11929 3 5.5 3V3C6.88071 3 8 4.11929 8 5.5V18.5C8 19.8807 6.88071 21 5.5 21V21C4.11929 21 3 19.8807 3 18.5V5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
