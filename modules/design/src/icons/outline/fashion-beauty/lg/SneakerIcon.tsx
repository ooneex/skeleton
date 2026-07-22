import type { SVGProps } from "react";

export const SneakerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16.5 33L11 39" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M18 39L22.7479 33.8205" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 31L12.5936 32.5141C19.3535 33.581 26.1885 34.0998 33.0319 34.0653L46 34"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M26 25L29.5 21.5L29.126 21.874"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22.5 21L26 17.5L25.626 17.874"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18.6441 9L31.322 23.5L38.5111 24.7245C42.8363 25.4612 46 29.2092 46 33.5967V34C46 36.7614 43.7614 39 41 39H7.63587C4.63826 39 2.31434 36.3805 2.67149 33.4043L4.80346 15.6378C4.9156 14.7033 5.70837 14 6.64959 14H6.83772C8.7262 14 10.4028 15.2084 11 17L11.378 18.1341C11.7495 19.2484 12.7923 20 13.9668 20V20C14.6326 20 15.2753 19.7566 15.7741 19.3158L18.6184 16.8016"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
