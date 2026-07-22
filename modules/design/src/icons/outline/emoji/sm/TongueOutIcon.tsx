import type { SVGProps } from "react";

export const TongueOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 6V15C7 17.7614 9.23858 20 12 20V20C14.7614 20 17 17.7614 17 15V6"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 6H20" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M2 3C3.16519 3.41184 4 4.52308 4 5.82929C4 7.13551 3.16519 8.24675 2 8.65859"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 3C20.8348 3.41184 20 4.52308 20 5.82929C20 7.13551 20.8348 8.24675 22 8.65859"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
