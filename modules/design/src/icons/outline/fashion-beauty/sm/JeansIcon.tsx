import type { SVGProps } from "react";

export const JeansIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M6 2V9L3 12L4.67845 20.3922C4.86542 21.3271 5.68625 22 6.63961 22H18C19.1046 22 20 21.1046 20 20V2H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 15.1053L13 17L10 15.1053V11H16V15.1053Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
