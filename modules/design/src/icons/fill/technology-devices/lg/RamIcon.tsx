import type { SVGProps } from "react";

export const RamIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 31.5V38.5H18.5V31.5H21.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 31V36H41V31H44V37C44 38.1046 43.1046 39 42 39H6C4.89543 39 4 38.1046 4 37V31H7Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15C2 12.2386 4.23858 10 7 10H41C43.7614 10 46 12.2386 46 15V32C46 33.1046 45.1046 34 44 34H4C2.89543 34 2 33.1046 2 32V15ZM21 15L27 15L27 29H21L21 15ZM38 15L32 15L32 29H38L38 15ZM10 15L16 15L16 29H10L10 15Z"
        fill="currentColor"
      />
    </svg>
  );
};
