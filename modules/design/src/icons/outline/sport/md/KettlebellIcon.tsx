import type { SVGProps } from "react";

export const KettlebellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 12L25.0431 6.78447C25.5381 4.3093 23.645 2 21.1208 2H10.8792C8.35503 2 6.46186 4.3093 6.95689 6.78446L8 12"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 9C9.37258 9 4 14.2886 4 20.8125C4 24.5233 5.73822 27.8344 8.45689 30H23.5431C26.2618 27.8344 28 24.5233 28 20.8125C28 14.2886 22.6274 9 16 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 24C18.7614 24 21 21.7614 21 19C21 16.2386 18.7614 14 16 14C13.2386 14 11 16.2386 11 19C11 21.7614 13.2386 24 16 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
