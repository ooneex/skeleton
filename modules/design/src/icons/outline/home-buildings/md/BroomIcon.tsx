import type { SVGProps } from "react";

export const BroomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 29V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 29V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 29V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M13 9H19" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M13 15.0191V5C13 3.34315 14.3431 2 16 2V2C17.6569 2 19 3.34315 19 5L19 15.0191"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4.93057 27.4783L12.5614 15H19.4347L27.0689 27.4781C27.4766 28.1445 26.997 29 26.2159 29H5.7837C5.00263 29 4.52308 28.1446 4.93057 27.4783Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
