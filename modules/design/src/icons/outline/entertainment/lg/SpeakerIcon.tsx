import type { SVGProps } from "react";

export const SpeakerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 40C28.9706 40 33 35.9706 33 31C33 26.0294 28.9706 22 24 22C19.0294 22 15 26.0294 15 31C15 35.9706 19.0294 40 24 40Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 17C26.2091 17 28 15.2091 28 13C28 10.7909 26.2091 9 24 9C21.7909 9 20 10.7909 20 13C20 15.2091 21.7909 17 24 17Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 32.5C24.8284 32.5 25.5 31.8284 25.5 31C25.5 30.1716 24.8284 29.5 24 29.5C23.1716 29.5 22.5 30.1716 22.5 31C22.5 31.8284 23.1716 32.5 24 32.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
      />
      <path
        d="M12 45L36 45C38.7614 45 41 42.7614 41 40L41 7.99999C41 5.23857 38.7614 2.99999 36 2.99999L12 3C9.23857 3 7 5.23857 7 8L7 40C7 42.7614 9.23858 45 12 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
