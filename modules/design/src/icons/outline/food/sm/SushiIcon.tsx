import type { SVGProps } from "react";

export const SushiIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 1.5L13.5 8.19646L13.6137 7.89185"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 11.5L4 17.3158C4 19.3505 7.13401 21 11 21C12.6538 21 14.1737 20.6981 15.3716 20.1934"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 15C14.866 15 18 13.433 18 11.5C18 9.567 14.866 8 11 8C7.13401 8 4 9.567 4 11.5C4 13.433 7.13401 15 11 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 12C12.933 12 14.5 11.5523 14.5 11C14.5 10.4477 12.933 10 11 10C9.067 10 7.5 10.4477 7.5 11C7.5 11.5523 9.067 12 11 12Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M22.5 3L15 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
