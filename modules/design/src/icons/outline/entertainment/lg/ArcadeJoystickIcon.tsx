import type { SVGProps } from "react";

export const ArcadeJoystickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M43 36H5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 27V15V15.7058"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 15C25.3137 15 28 12.3137 28 9C28 5.68629 25.3137 3 22 3C18.6863 3 16 5.68629 16 9C16 12.3137 18.6863 15 22 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 21H9.22225L5 35.1551L5.00001 38C5.00002 40.7614 7.23859 43 10 43H38C40.7614 43 43 40.7614 43 38L43 35.1551L38.7778 21H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 26H16.5C15.1193 26 14 27.1193 14 28.5V28.5C14 29.8807 15.1193 31 16.5 31H27.5C28.8807 31 30 29.8807 30 28.5V28.5C30 27.1193 28.8807 26 27.5 26H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M35 31L36.5 31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
