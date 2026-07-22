import type { SVGProps } from "react";

export const ChalkboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M35 36V31H28V36" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M33 10H32L25 2H23L16 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M45 10L45 36C45 38.7614 42.7614 41 40 41L8 41C5.23858 41 3 38.7614 3 36L3 10L45 10Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M40 15L40 36L8 36L8 15L40 15Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 27C15.7678 21.5773 18.6687 19.6168 20.3642 20.0606C22.0157 20.4929 21.5359 25.1347 23.2852 25.4059C24.6244 25.6005 25.7172 23.2213 27.1048 23.5188C28.1906 23.7515 28.1565 25.4539 29.426 25.7823C29.9882 25.9278 30.4852 25.7823 31 25.5406"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
