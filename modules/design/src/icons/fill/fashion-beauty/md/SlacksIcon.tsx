import type { SVGProps } from "react";

export const SlacksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 11.9219L22 10.3223V8H20V11.6768L26 14.0771V31H19.5L17 14H15L12.5 31H6V14.0771L12 11.6768V8H10V10.3223L6 11.9219V6H26V11.9219Z"
        fill="currentColor"
      />
      <path d="M15 4H6V1H15V4Z" fill="currentColor" data-color="color-2" />
      <path d="M26 4H17V1H26V4Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
