import type { SVGProps } from "react";

export const FriedEggIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.5 17.5C13.0455 17.8435 11.9091 22.9246 6.27273 20.1764C3.45455 18.8023 2 15.6246 2 12.447C2 7.20822 6.45454 3.00001 12 3.00001C17.5455 3.00001 22 7.20822 22 12.447C22 15.1093 21.3182 16.9847 16.5 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 15.5C11.933 15.5 13.5 13.933 13.5 12C13.5 10.067 11.933 8.5 10 8.5C8.067 8.5 6.5 10.067 6.5 12C6.5 13.933 8.067 15.5 10 15.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
