import type { SVGProps } from "react";

export const FaceTongueOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <path
        d="M7 14H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.5 14V16.5C9.5 17.8807 10.6193 19 12 19V19C13.3807 19 14.5 17.8807 14.5 16.5V14"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
