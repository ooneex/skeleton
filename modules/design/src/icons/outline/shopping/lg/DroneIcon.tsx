import type { SVGProps } from "react";

export const DroneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 42L17 36H31L37 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 27H14L18 36H30L34 27H41C43.7614 27 46 24.7614 46 22C46 19.2386 43.7614 17 41 17H7C4.23858 17 2 19.2386 2 22C2 24.7614 4.23858 27 7 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M38 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M31 9L45 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 31C25.3807 31 26.5 29.8807 26.5 28.5C26.5 27.1193 25.3807 26 24 26C22.6193 26 21.5 27.1193 21.5 28.5C21.5 29.8807 22.6193 31 24 31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
