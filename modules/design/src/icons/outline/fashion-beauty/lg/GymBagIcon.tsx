import type { SVGProps } from "react";

export const GymBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 23H34" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M14 42.9749V13C14 7.47716 18.4772 3 24 3V3C29.5228 3 34 7.47715 34 13V43"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M38.2797 17C40.1047 17 41.7778 18.0165 42.6188 19.6362V19.6362C45.9924 26.1336 45.9924 33.8664 42.6188 40.3638V40.3638C41.7778 41.9835 40.1047 43 38.2797 43H9.72034C7.89532 43 6.22222 41.9835 5.38122 40.3638V40.3638C2.00757 33.8664 2.00757 26.1336 5.38122 19.6362V19.6362C6.22222 18.0165 7.89532 17 9.72035 17H38.2797Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M29 29H19V35H29V29Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
