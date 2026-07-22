import type { SVGProps } from "react";

export const CursorPointerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 18V3.5C9 2.11929 10.1193 1 11.5 1V1C12.8807 1 14 2.11929 14 3.5V10.5454L23.2929 12.9234C25.7061 13.5409 27.2966 15.8405 27.0231 18.3164L25.6217 31H10.4129V28.2727L6.21455 23.4075C5.43105 22.4995 5 21.3402 5 20.1409L5 16C5 14.3431 6.34315 13 8 13H8.58329"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M15 20V22.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 20V22.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
