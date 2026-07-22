import type { SVGProps } from "react";

export const MapSyncIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 13.5L21 8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 3V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M30 14.5V4.5L21 8L11 3L2 6.5V27.5L11 24V22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17.7322 20.5C18.8162 18.4201 20.9923 17 23.5 17C26.7498 17 29.4425 19.3849 29.9235 22.5H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29.2678 26.5C28.1837 28.5799 26.0077 30 23.5 30C20.2502 30 17.5574 27.6151 17.0764 24.5H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M31 18.5V22.5H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 28.5V24.5H20"
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
