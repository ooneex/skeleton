import type { SVGProps } from "react";

export const BranchMergeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 19L21 14L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 14H21H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 5H6.03875C6.64632 5 7.22094 5.27618 7.60049 5.75061L11 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
