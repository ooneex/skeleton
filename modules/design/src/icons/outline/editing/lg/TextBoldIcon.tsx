import type { SVGProps } from "react";

export const TextBoldIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 41H29.5C34.7467 41 39 36.7467 39 31.5V31.5C39 26.2533 34.7467 22 29.5 22L19 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 7H25.5C29.6421 7 33 10.3579 33 14.5V14.5C33 18.6421 29.6421 22 25.5 22H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 7V41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M20 7H13V41H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
