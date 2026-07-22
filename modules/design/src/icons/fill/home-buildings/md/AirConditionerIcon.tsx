import type { SVGProps } from "react";

export const AirConditionerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 8L31 16C31 18.2091 29.2091 20 27 20L25 20V14H7V20H5C2.79086 20 1 18.2091 1 16V8C1 5.79086 2.79086 4 5 4L27 4C29.2091 4 31 5.79086 31 8ZM21 8V10H25V8H21Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 28L8 28C9.10457 28 9.99999 27.1046 9.99999 26L9.99999 22L12 22L12 26C12 28.2091 10.2091 30 8 30L7 30L7 28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 28L24 28C22.8954 28 22 27.1046 22 26L22 22L20 22L20 26C20 28.2091 21.7909 30 24 30L25 30L25 28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 29L15 22L17 22L17 29L15 29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23 20V16H9V20H23Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
