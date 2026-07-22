import type { SVGProps } from "react";

export const BallotRectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 4.34315 5.34315 3 7 3H13C14.6569 3 16 4.34315 16 6V12C16 13.6569 14.6569 15 13 15H7C5.34315 15 4 13.6569 4 12V6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 21C4 19.3431 5.34315 18 7 18H13C14.6569 18 16 19.3431 16 21V27C16 28.6569 14.6569 30 13 30H7C5.34315 30 4 28.6569 4 27V21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 36C4 34.3431 5.34315 33 7 33H13C14.6569 33 16 34.3431 16 36V42C16 43.6569 14.6569 45 13 45H7C5.34315 45 4 43.6569 4 42V36Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 7.5H44V10.5H21V7.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 22.5H44V25.5H21V22.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 37.5H44V40.5H21V37.5Z" fill="currentColor" />
    </svg>
  );
};
