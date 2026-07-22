import type { SVGProps } from "react";

export const QrcodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="5"
        y="5"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="31"
        y="5"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="5"
        y="31"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <rect x="10" y="10" width="2" height="2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="10" y="36" width="2" height="2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="7" y="23" width="2" height="2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <rect x="36" y="10" width="2" height="2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M27 22H29V28H27V22Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 30V43H24V41H26V43H28H32M28 39H24M24 33H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M43 22H41V26H36V24H34V28H41V33H34V35V38H36V35H41V43H37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M26 17V13H24V17H22V5H26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M27 22H22V25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
