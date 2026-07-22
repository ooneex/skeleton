import type { SVGProps } from "react";

export const BowTieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11.5 21L19 23V25L11.5 27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36.5 21L29 23V25L36.5 27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M29.0588 19L39.6879 11.471C42.337 9.59465 46 11.4889 46 14.7351V33.2649C46 36.5111 42.337 38.4053 39.6879 36.529L29.0588 29"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 19.0417L8.31207 11.4711C5.66304 9.59465 2 11.4889 2 14.7351V33.2649C2 36.5111 5.66304 38.4053 8.31207 36.529L19 28.9583"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M26 34L22 34C20.3431 34 19 32.6569 19 31L19 17C19 15.3431 20.3431 14 22 14L26 14C27.6569 14 29 15.3431 29 17L29 31C29 32.6569 27.6569 34 26 34Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
