import type { SVGProps } from "react";

export const FileBookmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 2V11H4" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M28 13V5C28 3.34315 26.6569 2 25 2H13.2426C12.447 2 11.6839 2.31607 11.1213 2.87868L4.87868 9.12132C4.31607 9.68393 4 10.447 4 11.2426V27C4 28.6569 5.34315 30 7 30H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27 17H19C17.8954 17 17 17.8954 17 19V30L23 25.6667L29 30V19C29 17.8954 28.1046 17 27 17Z"
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
