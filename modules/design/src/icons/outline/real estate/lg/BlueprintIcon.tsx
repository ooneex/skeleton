import type { SVGProps } from "react";

export const BlueprintIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 25H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 15V25H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M34 4L39 4C41.7614 4 44 6.23858 44 9L44 38.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M25 43L8 43C5.23858 43 3 40.7614 3 38L3 14C3 11.2386 5.23858 9 8 9L29 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 43L39.5 43C41.9853 43 44 40.9853 44 38.5V38.5C44 36.0147 41.9853 34 39.5 34L34 34L34 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9 37V15H28V37H16V31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
