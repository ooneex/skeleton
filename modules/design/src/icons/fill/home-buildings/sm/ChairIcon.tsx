import type { SVGProps } from "react";

export const ChairIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 16V21H15V16H17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 16V21H7V16H9Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 17H4V13H20V17Z" fill="currentColor" />
      <path
        d="M8 2C6.34315 2 5 3.34314 5 5V10.1C5.32311 10.0344 5.65753 10 6 10L18 10C18.3425 10 18.6769 10.0344 19 10.1V5C19 3.34315 17.6569 2 16 2H8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 22L19 15C19 14.4477 18.5523 14 18 14L6 14C5.44772 14 5 14.4477 5 15L5 22L3 22L3 15C3 13.3431 4.34315 12 6 12L18 12C19.6569 12 21 13.3431 21 15L21 22L19 22Z"
        fill="currentColor"
      />
    </svg>
  );
};
