import type { SVGProps } from "react";

export const ChocolateBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M39 24V19H38.5C35.1863 19 32.5 16.3137 32.5 13V11H32C28.6863 11 26 8.31371 26 5V3L14 3C11.2386 3 9 5.23858 9 8L9 24"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 35V42C9 43.6569 10.3431 45 12 45H36C37.6569 45 39 43.6569 39 42V35"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7.00004 35L7 24H41V35H38.8235L24 30L9.17647 35H7.00004Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M21 18H15V9H21V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
