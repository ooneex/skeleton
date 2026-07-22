import type { SVGProps } from "react";

export const FillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 15C21.455 16.104 22.5 17.3607 22.5 18.8333C22.5 20.306 21.3806 21.5 20 21.5C18.6194 21.5 17.5 20.306 17.5 18.8333C17.5 17.3607 18.545 16.104 20 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17.5 12H13.8927C10.9987 12 8.13921 11.3719 5.51158 10.1592L3.38342 9.17694"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 10.4853L10.5147 2L2.02944 10.4853C1.24839 11.2663 1.24839 12.5327 2.02944 13.3137L7.68629 18.9706C8.46734 19.7516 9.73367 19.7516 10.5147 18.9706L19 10.4853Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
