import type { SVGProps } from "react";

export const WaterTapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 8L18 14C18 15.1046 18.8954 16 20 16L22 16L22 6L20 6C18.8954 6 18 6.89543 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 8H8C4.68629 8 2 10.6863 2 14V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 13H9C7.89543 13 7 13.8954 7 15V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M1 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 4V8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M4.5 19C5.53875 19.8333 6.5 21.0833 6.5 22.1571C6.5 23.2899 5.6045 24 4.5 24C3.3955 24 2.5 23.2899 2.5 22.1571C2.5 21.0833 3.4719 19.8333 4.5 19Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M10.0588 1.89804L9.14706 1.41176C7.94807 0.772303 6.5 1.64114 6.5 3C6.5 4.35886 7.94807 5.2277 9.14706 4.58824L10.0588 4.10196C10.6471 3.78824 11.3529 3.78823 11.9412 4.10196L12.8529 4.58824C14.0519 5.2277 15.5 4.35886 15.5 3C15.5 1.64114 14.0519 0.772302 12.8529 1.41176L11.9412 1.89804C11.3529 2.21176 10.6471 2.21177 10.0588 1.89804Z"
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
