import type { SVGProps } from "react";

export const WaterBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 3V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M11.005 18L13.005 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 7L9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15 7H9C7.89543 7 7 7.89543 7 9V10.75L7.44365 11.1659C8.28648 11.9561 8.28648 13.2939 7.44365 14.0841L7 14.5V20C7 21.1046 7.89543 22 9 22H15C16.1046 22 17 21.1046 17 20V14.5L16.5563 14.0841C15.7135 13.2939 15.7135 11.9561 16.5563 11.1659L17 10.75V9C17 7.89543 16.1046 7 15 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
