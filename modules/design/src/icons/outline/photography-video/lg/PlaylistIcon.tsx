import type { SVGProps } from "react";

export const PlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 41H41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 32L43 11C43 8.79086 41.2091 7 39 7L9 7C6.79086 7 5 8.79086 5 11L5 32C5 34.2091 6.79086 36 9 36L39 36C41.2091 36 43 34.2091 43 32Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 15.5L31 21.5L20 27.5V15.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
