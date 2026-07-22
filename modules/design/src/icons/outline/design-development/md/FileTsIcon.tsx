import type { SVGProps } from "react";

export const FileTsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 20H19.75C18.5074 20 17.5 21.0074 17.5 22.25V22.25C17.5 23.4926 18.5074 24.5 19.75 24.5H22.25C23.4926 24.5 24.5 25.5074 24.5 26.75V26.75C24.5 27.9926 23.4926 29 22.25 29H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 16L6 6C6 4.34315 7.34315 3 9 3L17 3L26 11L26 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16 3V12.0001H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M11 29V20M11 20H14M11 20L8 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
