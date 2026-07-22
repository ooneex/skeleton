import type { SVGProps } from "react";

export const WineMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 6H9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M14 8H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 12H17.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 14H7V18H3" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M9 3V8.85L9.23789 9.01058C10.3397 9.75427 11 10.9967 11 12.326V21H3V12.326C3 10.9967 3.66034 9.75427 4.76211 9.01058L5 8.85V3C5 2.44772 5.44772 2 6 2H8C8.55228 2 9 2.44771 9 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 20L21 20L21 4L13 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
