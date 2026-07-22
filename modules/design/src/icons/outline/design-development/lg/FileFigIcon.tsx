import type { SVGProps } from "react";

export const FileFigIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 44V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M25 3V17H40" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8 25L8 8C8 5.23858 10.2386 3 13 3L26 3L40 16L40 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M37 38H40.0002V44H36.1629C32.2072 44 29 40.866 29 37C29 33.134 32.2072 30 36.1629 30H36.9304"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 44L11 30H19M16 37H11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
