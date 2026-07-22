import type { SVGProps } from "react";

export const RoadmapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10,22v3c0,1.657,1.343,3,3,3h12l5-7-4.011-5.615"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m2,11l5-7h12c1.657,0,3,1.343,3,3v8c0,1.657-1.343,3-3,3H7l-5-7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
