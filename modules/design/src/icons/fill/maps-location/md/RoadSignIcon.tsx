import type { SVGProps } from "react";

export const RoadSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 1L13 30H19L18 1H14Z" fill="currentColor" />
      <path d="M20.8288 25H27.5L31.5 21.5L27.5 18H20.5874L20.8288 25Z" fill="currentColor" data-color="color-2" />
      <path d="M20.346 11H27.5L31.5 7.5L27.5 4H20.1046L20.346 11Z" fill="currentColor" data-color="color-2" />
      <path d="M11.654 11H4.5L0.5 14.5L4.5 18H11.4126L11.654 11Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 29H22V31H10V29Z" fill="currentColor" />
    </svg>
  );
};
