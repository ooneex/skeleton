import type { SVGProps } from "react";

export const MediaLibraryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M45 32L45 11C45 8.79086 43.2091 7 41 7L12 7C9.79086 7 8 8.79086 8 11L8 32C8 34.2091 9.79086 36 12 36L41 36C43.2091 36 45 34.2091 45 32Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M38 41L11 41C6.58172 41 3 37.4183 3 33L3 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 14.5L34 21.5L22 28.5V14.5Z"
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
