import type { SVGProps } from "react";

export const RingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.5 7.025L16 4.4V3.2L13.7143 2H10.2857L8 3.2V4.4L10.5 7.025"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19.5 14.5C19.5 18.6421 16.1421 22 12 22C7.85786 22 4.5 18.6421 4.5 14.5C4.5 10.3579 7.85786 7 12 7C16.1421 7 19.5 10.3579 19.5 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
