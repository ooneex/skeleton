import type { SVGProps } from "react";

export const MusicIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 13L26.6667 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 25V8L27 4V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7.5 29C9.98528 29 12 27.2091 12 25C12 22.7909 9.98528 21 7.5 21C5.01472 21 3 22.7909 3 25C3 27.2091 5.01472 29 7.5 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22.5 25C24.9853 25 27 23.2091 27 21C27 18.7909 24.9853 17 22.5 17C20.0147 17 18 18.7909 18 21C18 23.2091 20.0147 25 22.5 25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
