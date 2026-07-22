import type { SVGProps } from "react";

export const TreesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 1.68225L22.9304 16.1732L20.7382 16.7212L23.3156 26H8.68433L11.2618 16.7212L9.06953 16.1732L16 1.68225Z"
        fill="currentColor"
      />
      <path
        d="M23.2146 18.1636L25.7913 17.5195L20.8816 7.25369L24.0797 1.92346L30.9519 15.6678L28.7901 16.2083L31.3874 24H24.8358L23.2146 18.1636Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M11.1184 7.25374L7.92022 1.92346L1.04804 15.6678L3.2098 16.2083L0.612549 24H7.16416L8.78538 18.1636L6.20869 17.5195L11.1184 7.25374Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 24V31H15V24H17Z" fill="currentColor" />
    </svg>
  );
};
