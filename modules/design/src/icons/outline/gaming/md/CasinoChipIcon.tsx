import type { SVGProps } from "react";

export const CasinoChipIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 30L16 26C13.4408 26 10.8816 25.0237 8.92893 23.0711L6 26"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M30 16H26C26 18.5592 25.0237 21.1184 23.0711 23.0711L26 26"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M1.99999 16H6C6 13.4408 6.97631 10.8816 8.92893 8.92893L6 6"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 2L16 6C18.5592 6 21.1184 6.97631 23.0711 8.92893L26 6"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="14"
        transform="rotate(90 16 16)"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="6"
        ry="6"
        transform="rotate(90 16 16)"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M16 19L13 16L16 13L19 16L16 19Z" fill="currentColor" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
