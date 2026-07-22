import type { SVGProps } from "react";

export const FileDocIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22.5 15.5502C21.9948 15.2019 21.3943 15 20.75 15C18.9551 15 17.5 16.567 17.5 18.5C17.5 20.433 18.9551 22 20.75 22C21.3943 22 21.9948 21.7981 22.5 21.4498"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M1 15V22H2.5C4.433 22 6 20.433 6 18.5C6 16.567 4.433 15 2.5 15H1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 18.5C15 20.433 13.5449 22 11.75 22C9.95507 22 8.5 20.433 8.5 18.5C8.5 16.567 9.95507 15 11.75 15C13.5449 15 15 16.567 15 18.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M4 9H11V2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M4 11V9.07843C4 8.54799 4.21071 8.03929 4.58579 7.66421L9.66421 2.58579C10.0393 2.21071 10.548 2 11.0784 2H18C19.1046 2 20 2.89543 20 4V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
