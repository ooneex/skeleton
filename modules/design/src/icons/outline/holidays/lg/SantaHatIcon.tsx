import type { SVGProps } from "react";

export const SantaHatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43 37V22C43 11.5066 34.4934 3 24 3C13.5066 3 5 11.5066 5 22V22.159"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 8C18.6923 8 14.0745 10.8296 11.7005 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M32 33H6C3.79086 33 2 31.2091 2 29V26C2 23.7909 3.79086 22 6 22H33C35.2091 22 37 23.7909 37 26V36.9983V36.4983"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M45 41C45 43.7614 42.7614 46 40 46C37.2386 46 35 43.7614 35 41C35 38.2386 37.2386 36 40 36C42.7614 36 45 38.2386 45 41Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
