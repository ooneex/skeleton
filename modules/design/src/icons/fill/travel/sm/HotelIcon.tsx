import type { SVGProps } from "react";

export const HotelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4C4 2.34314 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V14.7192L22 15.2192V23H14V18H10V23H2V15.2192L4 14.7192V4ZM13 5H16V7H13V5ZM13 9V11H16V9H13ZM13 13H16V15H13V13ZM8 5V7H11V5H8ZM8 9H11V11H8V9ZM8 13V15H11V13H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
