import type { SVGProps } from "react";

export const ResistanceBandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 38H43" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M17 10L5 10" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M11 16V36.5C11 40.0899 13.9102 43 17.5 43V43C21.0899 43 24 40.0899 24 36.5V11.5C24 7.91015 26.9102 5 30.5 5V5C34.0899 5 37 7.91015 37 11.5V32"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M41.0598 34.4181C40.2527 32.9281 38.6944 32 37 32V32C35.3056 32 33.7473 32.9281 32.9402 34.4181L31 38V41C31 42.1046 31.8954 43 33 43H41C42.1046 43 43 42.1046 43 41V38L41.0598 34.4181Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6.94022 13.5819C7.74725 15.0719 9.30556 16 11 16V16C12.6944 16 14.2527 15.0719 15.0598 13.5819L17 10L17 7C17 5.89543 16.1046 5 15 5L7 5C5.89543 5 5 5.89543 5 7L5 10L6.94022 13.5819Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
