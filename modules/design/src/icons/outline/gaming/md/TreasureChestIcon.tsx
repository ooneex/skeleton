import type { SVGProps } from "react";

export const TreasureChestIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 16V16.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M25 14L25 27" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M7 14L7 27" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M20 14H30" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M2 14H12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M2 11C2 7.68629 4.68629 5 8 5H24C27.3137 5 30 7.68629 30 11V24C30 25.6569 28.6569 27 27 27H5C3.34315 27 2 25.6569 2 24V11Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 17V13C12 12.4477 12.4477 12 13 12H19C19.5523 12 20 12.4477 20 13V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
