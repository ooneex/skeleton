import type { SVGProps } from "react";

export const MusicNoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 16.5714V17.5L13 4L13.6412 4.47635C14.8483 5.37299 16.3119 5.85714 17.8155 5.85714H18V10H17.2238C16.0915 10 14.9761 9.72533 13.9733 9.19954L13.3046 8.84891"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9 21C11.2091 21 13 19.433 13 17.5C13 15.567 11.2091 14 9 14C6.79086 14 5 15.567 5 17.5C5 19.433 6.79086 21 9 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
