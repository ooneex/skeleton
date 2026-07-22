import type { SVGProps } from "react";

export const QrcodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="3" y="3" width="9" height="9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="3" y="20" width="9" height="9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect
        x="27"
        y="20"
        width="2"
        height="2"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="16"
        y="27"
        width="2"
        height="2"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect x="20" y="3" width="9" height="9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 16H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M13 16H18M22 16V23H29M22 16H26M22 16H18M18 16V20H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 7V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 25V29H23V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29.01 29H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect x="24" y="7" width="1" height="1" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="7" y="7" width="1" height="1" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="7" y="24" width="1" height="1" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
