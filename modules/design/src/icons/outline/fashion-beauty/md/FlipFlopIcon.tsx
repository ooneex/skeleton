import type { SVGProps } from "react";

export const FlipFlopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 6L16 11V10.3333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.31184 18.0125C9.07455 14.0322 13.5848 11 16 11C18.3922 11 22.8836 13.9635 23.7103 17.8874"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 30C12.3448 30 9.21171 26.92 8.82008 23L7.51464 10.4C7.25355 5.92 10.5172 2 14.6946 2H17.3054C21.4828 2 24.7464 5.92 24.4854 10.4L23.1799 23C22.7883 26.92 19.6552 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 25H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
