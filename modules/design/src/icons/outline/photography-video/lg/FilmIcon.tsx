import type { SVGProps } from "react";

export const FilmIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M36 18L43 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36 36L43 36" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36 12L43 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36 30L43 30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 18L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 36L12 36" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 12L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 30L12 30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 24L43 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M36 5L36 43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 5.00001L12 43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M43 38L43 10C43 7.23858 40.7614 5 38 5L10 5C7.23857 5 5 7.23857 5 10L5 38C5 40.7614 7.23857 43 10 43L38 43C40.7614 43 43 40.7614 43 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
