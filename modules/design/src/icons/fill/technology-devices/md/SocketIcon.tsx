import type { SVGProps } from "react";

export const SocketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 6C30 3.79086 28.2091 2 26 2H6C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H26C28.2091 30 30 28.2091 30 26L30 6ZM11 22L11 23H21V22C21 19.2386 18.7614 17 16 17C13.2386 17 11 19.2386 11 22ZM12 9V15H10V9H12ZM22 9H20V15H22V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
