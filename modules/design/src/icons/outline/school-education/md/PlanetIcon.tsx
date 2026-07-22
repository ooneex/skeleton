import type { SVGProps } from "react";

export const PlanetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8.59784 2.78858C6.32886 1.85709 4.55147 1.73946 3.6525 2.63843C1.43792 4.85301 5.39274 12.3984 12.4858 19.4915C19.5789 26.5846 27.1243 30.5394 29.3389 28.3248C30.2378 27.4258 30.1202 25.6484 29.1887 23.3794"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21.5 20C22.3284 20 23 19.3284 23 18.5C23 17.6716 22.3284 17 21.5 17C20.6716 17 20 17.6716 20 18.5C20 19.3284 20.6716 20 21.5 20Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
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
