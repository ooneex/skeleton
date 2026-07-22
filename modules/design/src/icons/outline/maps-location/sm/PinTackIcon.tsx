import type { SVGProps } from "react";

export const PinTackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 20L8.5 15.5L8.30391 15.6961"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14.3137 21.0048L8.65685 15.3479L3 9.69106L4.2283 8.46276C5.17543 7.51563 6.63567 7.31112 7.80655 7.96161L8.3876 8.28442L15.7279 2.62L21.3848 8.27685L15.7204 15.6172L16.0432 16.1982C16.6936 17.3691 16.4891 18.8293 15.542 19.7765L14.3137 21.0048Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
