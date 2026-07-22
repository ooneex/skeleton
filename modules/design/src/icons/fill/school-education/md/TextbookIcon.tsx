import type { SVGProps } from "react";

export const TextbookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 1C26.2091 1 28 2.79086 28 5V27C28 29.2091 26.2091 31 24 31H4V1H24ZM11 14.8047L16 11.6787L21 14.8047V3H11V14.8047Z"
        fill="currentColor"
      />
    </svg>
  );
};
