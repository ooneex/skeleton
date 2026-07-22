import type { SVGProps } from "react";

export const ArchiveDocCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V12H18V4C18 3.44772 17.5523 3 17 3H7C6.44772 3 6 3.44772 6 4V12H4V4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4141 6L11.4999 10.9142L8.08569 7.5L9.49991 6.08578L11.4999 8.08578L14.9999 4.58578L16.4141 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M2 19V14H8V16H16V14H22V19C22 20.6569 20.6569 22 19 22L5 22C3.34315 22 2 20.6569 2 19Z"
        fill="currentColor"
      />
    </svg>
  );
};
