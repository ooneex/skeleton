import type { SVGProps } from "react";

export const MilitaryRankIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M26 15.5889L16 21.1436L6 15.5889V9H26V15.5889Z" fill="currentColor" />
      <path
        d="M26.3594 20.3887L16 26.1436L5.64062 20.3887L6.61133 18.6406L16 23.8555L25.3887 18.6406L26.3594 20.3887Z"
        fill="currentColor"
      />
      <path
        d="M26.3594 25.3887L16 31.1436L5.64062 25.3887L6.61133 23.6406L16 28.8555L25.3887 23.6406L26.3594 25.3887Z"
        fill="currentColor"
      />
      <path d="M26 7H6V2H26V7Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
