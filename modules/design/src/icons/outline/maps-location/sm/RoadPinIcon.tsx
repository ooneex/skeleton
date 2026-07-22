import type { SVGProps } from "react";

export const RoadPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 13.5L5.5 22L5.64706 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 13.5L18.5 22L18.3529 21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19.9781 6L20 6C21.1046 6 22 6.89543 22 8L22 20C22 21.1046 21.1046 22 20 22L4 22C2.89543 22 2 21.1046 2 20L2 8C2 6.89543 2.89543 6 4 6V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 10.75C14.328 9.094 16 7.209 16 5C16 2.791 14.209 1 12 1C9.791 1 8 2.791 8 5C8 7.209 9.672 9.094 12 10.75Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path d="M12 19.01V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 15.01V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
