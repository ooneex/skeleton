import type { SVGProps } from "react";

export const MapPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 13V8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 3V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 26.5L11 24L2 27.5V6.5L11 3L21 8L30 4.5V13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 30C28.492 27.6222 31 24.9155 31 21.7436C31 18.5717 28.3135 16 25 16C21.6865 16 19 18.5717 19 21.7436C19 24.9155 21.508 27.6222 25 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25.5 22C25.5 22.2761 25.2761 22.5 25 22.5C24.7239 22.5 24.5 22.2761 24.5 22C24.5 21.7239 24.7239 21.5 25 21.5C25.2761 21.5 25.5 21.7239 25.5 22Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
