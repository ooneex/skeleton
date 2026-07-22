import type { SVGProps } from "react";

export const GolfBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 18V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 18V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 14V5.386C14 4.55231 14.5171 3.80607 15.2978 3.51334L19.6355 1.88667C20.7796 1.45765 22 2.30339 22 3.52525V6.25C22 7.2165 21.2165 8 20.25 8H14.0766"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 14V6.5086C10 5.61564 9.40805 4.83087 8.54944 4.58555L4.91208 3.54631C3.95386 3.27253 3 3.99203 3 4.98859V7.25C3 8.2165 3.7835 9 4.75 9H9.87131"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M19 14H5V18H19V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
