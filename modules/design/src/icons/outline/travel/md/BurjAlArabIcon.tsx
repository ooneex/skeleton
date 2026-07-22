import type { SVGProps } from "react";

export const BurjAlArabIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 9L20.5 9C20.6143 9 20.7197 9.0384 20.804 9.10301C21.035 9.28021 20.8731 9.60925 20.6524 9.79922L10.0413 18.9336V19H24V19.0433L10.0413 28.975L10.2854 28.8013"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 29C28 14 20.6031 5.08333 10 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M6 29H28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 29L10 1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
