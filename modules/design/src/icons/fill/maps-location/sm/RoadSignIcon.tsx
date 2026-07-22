import type { SVGProps } from "react";

export const RoadSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 0V22H11V0H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 21H16V23H8V21Z" fill="currentColor" />
      <path d="M20.5 13H15V18H20.5L23.5 15.5L20.5 13Z" fill="currentColor" data-color="color-2" />
      <path d="M20.5 3H15V8H20.5L23.5 5.5L20.5 3Z" fill="currentColor" data-color="color-2" />
      <path d="M3.5 8H9V13H3.5L0.5 10.5L3.5 8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
