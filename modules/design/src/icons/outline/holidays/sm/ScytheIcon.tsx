import type { SVGProps } from "react";

export const ScytheIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 6.5L4.65754 5.11871C9.62693 0.977552 19.5 1.49998 21 9.5L19.8944 9.08538C15.6645 7.49919 10.9023 8.42291 7.5722 11.4755L7 12"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M2 5L14.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22 13C22.7791 13.6667 23.5 14.6667 23.5 15.5256C23.5 16.4319 22.8284 17 22 17C21.1716 17 20.5 16.4319 20.5 15.5256C20.5 14.6667 21.2289 13.6667 22 13Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
