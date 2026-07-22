import type { SVGProps } from "react";

export const ScreenTouchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 17.0001L10 8C10 6.89543 10.8954 6 12 6V6C13.1046 6 14 6.89543 14 8V12L18.4713 14.0637C19.6752 14.6193 20.3715 15.8993 20.184 17.2118L19.5 22M9.5 14.0001H9C7.89543 14.0001 7 14.8955 7 16.0001L7 18.7574C7 19.553 7.31607 20.3161 7.87868 20.8787L9 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 8V5C3 3.89543 3.89543 3 5 3H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 3H19C20.1046 3 21 3.89543 21 5V8"
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
