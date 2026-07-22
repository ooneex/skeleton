import type { SVGProps } from "react";

export const TextHighlightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20.0674 18.7336L9.56743 12.7336"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6.5 26L8.97823 21.8327L11 23L12.9782 24.1421L12 26L6.5 26Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M29 29H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19.4733 20.1751L25.5798 9.59815C26.4082 8.16328 25.9166 6.32854 24.4817 5.50011L19.2856 2.50006C17.8507 1.6716 16.0159 2.16323 15.1875 3.59814L9.08109 14.175C8.81588 14.6343 8.74401 15.1802 8.8813 15.6926L9.42854 17.7349C9.56583 18.2473 9.49396 18.7932 9.22874 19.2526L8.30952 20.8447L14.083 24.178L15.0022 22.586C15.2674 22.1266 15.7042 21.7914 16.2166 21.6542L18.2589 21.1069C18.7713 20.9696 19.2081 20.6344 19.4733 20.1751Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
