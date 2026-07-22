import type { SVGProps } from "react";

export const HandgunIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M9 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M17 11L15.9867 13.7022C15.6939 14.4829 14.9477 15 14.114 15H10"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3.49995 4L2.70582 7.17653C2.57425 7.70279 2.6621 8.25993 2.94922 8.72017L4.23795 10.786L2.12998 17.0704C1.93328 17.6568 2.01896 18.3012 2.36204 18.8158L3.81816 21H8.31816L11.5 11H19L20 10H23V4H3.49995Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
