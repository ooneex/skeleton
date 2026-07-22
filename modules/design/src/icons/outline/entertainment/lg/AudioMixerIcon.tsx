import type { SVGProps } from "react";

export const AudioMixerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M37.5 35V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37.5 13V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 35C25.0751 35 30 30.0751 30 24C30 17.9249 25.0751 13 19 13C12.9249 13 8 17.9249 8 24C8 30.0751 12.9249 35 19 35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 25.5C19.8284 25.5 20.5 24.8284 20.5 24C20.5 23.1716 19.8284 22.5 19 22.5C18.1716 22.5 17.5 23.1716 17.5 24C17.5 24.8284 18.1716 25.5 19 25.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="M40 25H35V20H40V25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 36L45 12C45 9.23858 42.7614 7 40 7L8 7C5.23858 7 3 9.23858 3 12L3 36C3 38.7614 5.23857 41 8 41L40 41C42.7614 41 45 38.7614 45 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
