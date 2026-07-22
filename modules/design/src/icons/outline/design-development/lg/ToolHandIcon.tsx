import type { SVGProps } from "react";

export const ToolHandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M33.75 18.3158L33.75 12.375C33.75 10.511 35.261 9 37.125 9V9C38.989 9 40.5 10.511 40.5 12.375L40.5 35C40.5 40.5228 36.0229 45 30.5 45L22.8952 45C21.1851 45 19.4876 44.7076 17.8761 44.1354L17.1685 43.8841C12.5233 42.2347 8.98492 38.4083 7.70341 33.6484L4.7249 22.5853C4.57796 22.0396 4.58819 21.4634 4.75441 20.9232L4.86976 20.5483C5.71594 17.7982 9.57317 17.7012 10.5565 20.4053L13.5 28.5L13.5 9.375C13.5 7.51104 15.011 6 16.875 6V6C18.739 6 20.25 7.51104 20.25 9.375L20.25 14.2105"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20.25 21L20.25 5.375C20.25 3.51104 21.761 2 23.625 2V2C25.489 2 27 3.51104 27 5.375V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27 20.5V8.375C27 6.51104 28.511 5 30.375 5V5C32.239 5 33.75 6.51104 33.75 8.375V22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
