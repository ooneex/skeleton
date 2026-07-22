import type { SVGProps } from "react";

export const MobileCameraIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17 2L7 2C5.89543 2 5 2.89543 5 4L5 20C5 21.1046 5.89543 22 7 22L17 22C18.1046 22 19 21.1046 19 20L19 4C19 2.89543 18.1046 2 17 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11.9397 5.12062L10.0603 5.12062C10.027 5.12062 10 5.09362 10 5.06031C10 5.027 10.027 5 10.0603 5L11.9397 5C11.973 5 12 5.027 12 5.06031C12 5.09362 11.973 5.12062 11.9397 5.12062Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
