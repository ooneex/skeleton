import type { SVGProps } from "react";

export const IndustryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 23H16" stroke="currentColor" strokeWidth="2" data-color="color-2" fill="none" data-cap="butt" />
      <path
        d="M16 28L31 22V28L43 22V43H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path d="M4 43H16V15H7L4 43Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 10C7 5.8575 11.029 2.5 16 2.5C18.856 2.5 21.397 3.6125 23.0455 5.34125C24.3685 4.3625 26.092 3.75 28 3.75C32.1415 3.75 35.5 6.54875 35.5 10H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M43 10H42"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M38 38V34.5C38 33.1193 36.8807 32 35.5 32C34.1193 32 33 33.1193 33 34.5V38H38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M26 38V34.5C26 33.1193 24.8807 32 23.5 32C22.1193 32 21 33.1193 21 34.5V38H26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
