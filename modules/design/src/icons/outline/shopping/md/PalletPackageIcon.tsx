import type { SVGProps } from "react";

export const PalletPackageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 3.99994L16 17.9999"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 11.0001L8 11.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect
        x="8"
        y="4"
        width="16"
        height="14"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M1 22H31" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M13 26V28.0001H19V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M25 26V28H31V21.8824L27.9235 11M7 26V28H1V21.8824L4.0765 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
