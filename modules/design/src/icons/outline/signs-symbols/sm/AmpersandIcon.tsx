import type { SVGProps } from "react";

export const AmpersandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 13C20 13 20 22 11.5 22C8 22 5 19.8933 5 17C5 10.5 15 11.0476 15 5.80952C15 4.79918 14.5786 3.83021 13.8284 3.11578C13.0783 2.40136 12.0609 2 11 2C9.93913 2 8.92172 2.40136 8.17157 3.11578C7.42143 3.83021 7 4.79918 7 5.80952C7 8.66667 10 11.0476 13 13.9048L21 21.5238"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
