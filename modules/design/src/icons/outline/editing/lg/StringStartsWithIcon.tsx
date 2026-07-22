import type { SVGProps } from "react";

export const StringStartsWithIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M45 41H3V31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M23.9736 26.2638C22.2158 30.1149 18.6381 31.9421 15.2999 31.9992C12.954 32.0393 10.526 30.6413 10.0686 28.1779C9.6761 26.0637 10.9631 23.5694 14.0415 22.7193C17.3944 21.7933 24 22.026 24 22.026"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 32V20.4702C24 16.8968 21.1032 14 17.5298 14V14C15.9032 14 14.3363 14.6126 13.1411 15.7159L12 16.7692"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M30 32V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M44 25V22C44 18.134 40.866 15 37 15C33.134 15 30 18.134 30 22V25C30 28.866 33.134 32 37 32C40.866 32 44 28.866 44 25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
