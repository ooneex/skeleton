import type { SVGProps } from "react";

export const PaddlingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 17.5V29" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M23 14.5V3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M5 3L5 11.5104C5 13.7277 6.05049 15.8139 7.83182 17.1342L9 18L10.1682 17.1342C11.9495 15.8139 13 13.7277 13 11.5104L13 3L5 3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 29L19 20.4896C19 18.2723 20.0505 16.1861 21.8318 14.8658L23 14L24.1682 14.8658C25.9495 16.1861 27 18.2723 27 20.4896L27 29L19 29Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7 29H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M21 3H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
