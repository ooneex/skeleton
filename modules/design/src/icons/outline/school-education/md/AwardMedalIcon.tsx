import type { SVGProps } from "react";

export const AwardMedalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.5 10.5L10.6667 3H4.66666V3.66667L8.5 13.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18.5 10.5L21.3333 3H27.3333V3.66667L23.5 13.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 30C21.5228 30 26 25.5228 26 20C26 14.4772 21.5228 10 16 10C10.4772 10 6 14.4772 6 20C6 25.5228 10.4772 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 25C18.7614 25 21 22.7614 21 20C21 17.2386 18.7614 15 16 15C13.2386 15 11 17.2386 11 20C11 22.7614 13.2386 25 16 25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
