import type { SVGProps } from "react";

export const EditPolygonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5 7.5H32.5V10.5H15.5V7.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5 37.5H39.5V40.5H8.5V37.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.5707 35.4548L33.5707 13.4548L36.4294 12.5452L43.4294 34.5452L40.5707 35.4548Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.57042 34.5452L11.5704 12.5452L14.4292 13.4548L7.4292 35.4548L4.57042 34.5452Z"
        fill="currentColor"
      />
      <path d="M18 4H8V14H18V4Z" fill="currentColor" data-color="color-2" />
      <path d="M40 4H30V14H40V4Z" fill="currentColor" data-color="color-2" />
      <path d="M47 34H37V44H47V34Z" fill="currentColor" data-color="color-2" />
      <path d="M11 34H1V44H11V34Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
