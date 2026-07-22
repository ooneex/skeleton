import type { SVGProps } from "react";

export const PlayingCardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M34 3H12C9.23858 3 7 5.23858 7 8V40C7 42.7614 9.23858 45 12 45H34C36.7614 45 39 42.7614 39 40V8C39 5.23858 36.7614 3 34 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M44 7V41"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 32.5C24.9962 31.5882 32 26.5352 32 21.9035C32 19.1955 29.8292 17 27.1544 17C25.3904 17 24.0728 18.1196 23 19.3761C21.929 18.1178 20.6096 17 18.8456 17C16.169 17 14 19.1955 14 21.9035C14 26.5352 21.0038 31.5882 23 32.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M31 40H34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 8L12 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
