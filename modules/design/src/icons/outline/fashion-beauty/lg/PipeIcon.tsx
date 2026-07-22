import type { SVGProps } from "react";

export const PipeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 24H19" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M19 16V26C19 28.2091 20.7909 30 23 30C25.2091 30 27 28.2091 27 26V18C27 10.8203 32.8203 5 40 5H44.5C44.7761 5 45 5.22386 45 5.5V9.5C45 9.77614 44.7761 10 44.5 10H41C38.2386 10 36 12.2386 36 15V26.4692C36 35.5989 28.5989 43 19.4692 43C9.61672 43 1.95156 34.436 3.03959 24.6437L4 16H19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
