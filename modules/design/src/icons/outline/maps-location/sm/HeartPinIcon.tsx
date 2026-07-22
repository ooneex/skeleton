import type { SVGProps } from "react";

export const HeartPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.5 8.82895C16.5 11.1189 12.9983 13.4528 12 13.9039C11.0017 13.4528 7.5 11.1189 7.5 8.82895C7.5 7.48943 8.58525 6.40393 9.92325 6.40393C10.7669 6.40393 11.477 6.91105 12 7.5C12.523 6.91105 13.2331 6.40393 14.0767 6.40393C15.4147 6.40393 16.5 7.48943 16.5 8.82895Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
