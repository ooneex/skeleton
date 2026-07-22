import type { SVGProps } from "react";

export const AlcoholWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 10H29" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M28 1.99998L29.5 15.7L31.149 16.2728C35.7946 17.8865 38.8046 22.3877 38.5213 27.2973L37.5 45H10.5L9.493 27.5454C9.20306 22.5196 12.3618 17.9384 17.1623 16.4224L18.5 16L20 2L28 1.99998Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20.2311 38.2311L16.5 34.5L20.2689 30.7311L16.5 26.9621L20.2311 23.2311L24 27L27.7689 23.2311L31.5 26.9621L27.75 30.75L31.5 34.5L27.7689 38.2311L24.0189 34.4811L20.2311 38.2311Z"
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
