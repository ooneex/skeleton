import type { SVGProps } from "react";

export const ItineraryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7C13.8954 7 13 7.89543 13 9V26H10V9C10 6.23858 12.2386 4 15 4H18.4412C20.9438 4 23.061 5.85031 23.3961 8.33041L27.5769 39.2678C27.7109 40.2599 28.5578 41 29.5588 41H33C34.1046 41 35 40.1046 35 39V22H38V39C38 41.7614 35.7614 44 33 44H29.5588C27.0562 44 24.939 42.1497 24.6039 39.6696L20.4231 8.73216C20.2891 7.74012 19.4422 7 18.4412 7H15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 29H19V44H4V29Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M29 4H44V19H29V4Z" fill="currentColor" />
    </svg>
  );
};
