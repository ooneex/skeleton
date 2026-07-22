import type { SVGProps } from "react";

export const BeachPaddleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 17H12" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M10 3C6.68629 3 4 5.13401 4 9C4 11.222 4.88742 12.8824 6.27134 13.9915C7.21956 14.7513 8 15.7929 8 17.008V19C8 20.1046 8.89543 21 10 21C11.1046 21 12 20.1046 12 19V17.008C12 15.7929 12.7804 14.7513 13.7287 13.9915C15.1126 12.8824 16 11.222 16 9C16 5.13401 13.3137 3 10 3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21 18.5C21 19.8807 19.8807 21 18.5 21C17.1193 21 16 19.8807 16 18.5C16 17.1193 17.1193 16 18.5 16C19.8807 16 21 17.1193 21 18.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
