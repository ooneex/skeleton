import type { SVGProps } from "react";

export const FileGalleryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 2V11H4" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M28 14V5C28 3.34315 26.6569 2 25 2H13.2426C12.447 2 11.6839 2.31607 11.1213 2.87868L4.87868 9.12132C4.31607 9.68393 4 10.447 4 11.2426V27C4 28.6569 5.34315 30 7 30H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <rect
        x="16"
        y="18"
        width="4"
        height="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="16"
        y="26"
        width="4"
        height="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="24"
        y="18"
        width="4"
        height="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="24"
        y="26"
        width="4"
        height="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
