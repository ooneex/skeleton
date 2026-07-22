import type { SVGProps } from "react";

export const ArchiveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 30H15V35H33V30H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 10L5 38C5 40.7614 7.23858 43 10 43L38 43C40.7614 43 43 40.7614 43 38L43 10C43 7.23857 40.7614 5 38 5L10 5C7.23857 5 5 7.23857 5 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
