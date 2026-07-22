import type { SVGProps } from "react";

export const CarBrowserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 8H22" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M22 8L22 6C22 4.89543 21.1046 4 20 4L4 4C2.89543 4 2 4.89543 2 6L2 18C2 19.1046 2.89543 20 4 20L5 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 21.5V17.9415C23 17.0807 22.4491 16.3164 21.6325 16.0442L21.5 16L20.9512 13.561C20.7459 12.6484 19.9354 12 19 12H13C12.0646 12 11.2541 12.6484 11.0488 13.561L10.5 16L10.3675 16.0442C9.55086 16.3164 9 17.0807 9 17.9415V21.5C9 21.7761 9.22386 22 9.5 22H12.5C12.7761 22 13 21.7761 13 21.5V20.5H19V21.5C19 21.7761 19.2239 22 19.5 22H22.5C22.7761 22 23 21.7761 23 21.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 16.5H18C18 17.3284 18.6716 18 19.5 18H21V16.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16.5H14C14 17.3284 13.3284 18 12.5 18H11V16.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
