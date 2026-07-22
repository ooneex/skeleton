import type { SVGProps } from "react";

export const HeadsetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25 25.5V24.6557V27C25 28.6569 23.6569 30 22 30H15.5C14.6716 30 14 29.3284 14 28.5V28.5C14 27.6716 14.6716 27 15.5 27H17C17.5523 27 18 27.4477 18 28V28.5H15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 19V15C3 7.8203 8.8203 2 16 2C23.1797 2 29 7.8203 29 15V19C29 22.3137 26.3137 25 23 25H21L20.6662 18.6577C20.5759 16.9413 21.9432 15.5 23.662 15.5H25V15C25 10.0294 20.9706 6 16 6C11.0294 6 7 10.0294 7 15V15.5H8.33795C10.0568 15.5 11.4241 16.9413 11.3338 18.6577L11 25H9C5.68629 25 3 22.3137 3 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
