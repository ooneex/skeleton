import type { SVGProps } from "react";

export const UserPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 4C11.171 4 10.5 3.329 10.5 2.5C10.5 1.671 11.171 1 12 1C12.829 1 13.5 1.671 13.5 2.5C13.5 3.329 12.829 4 12 4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M5.934 15.825C3.547 16.556 2 17.704 2 19C2 21.209 6.477 23 12 23C17.523 23 22 21.209 22 19C22 17.704 20.453 16.556 18.066 15.825"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10.5 19L10 14L8 13L8.914 8.42899C8.969 8.15599 9.132 7.90699 9.373 7.76699C11.124 6.74499 12.875 6.74499 14.626 7.76699C14.867 7.90799 15.03 8.15599 15.085 8.42899L15.999 13L13.999 14L13.499 19H10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
