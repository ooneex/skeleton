import type { SVGProps } from "react";

export const TongueOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 12V31C14 36.5228 18.4772 41 24 41V41C29.5228 41 34 36.5228 34 31V12"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M24 12V24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 12H40" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M4 6.5C6.33038 7.30059 8 9.46078 8 12C8 14.5392 6.33038 16.6994 4 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M44 6.5C41.6696 7.30059 40 9.46078 40 12C40 14.5392 41.6696 16.6994 44 17.5"
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
