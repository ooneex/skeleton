import type { SVGProps } from "react";

export const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 9V21" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M10.5722 2.25652L8.27612 9.00001L3 9.00001L3 20.5L15.6654 21.7665C17.037 21.9037 18.3255 21.0886 18.7891 19.7905L22.0456 10.6727C22.5108 9.3702 21.5452 8.00001 20.1621 8.00001L14 8.00001L14.1803 2.9199C14.2176 1.87077 13.3771 1 12.3274 1C11.5337 0.999999 10.828 1.50518 10.5722 2.25652Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
