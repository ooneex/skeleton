import type { SVGProps } from "react";

export const PodiumTrophyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 9.00003V13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M20 4H22V4.5L20 5.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12 4H10L10 4.5L12 5.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M11.4678 21H3V29H12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20.4698 23H29V29H20"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 2V5C12 7.20914 13.7909 9 16 9C18.2091 9 20 7.20914 20 5V2H12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M20.5 17H11.5V29H20.5V17Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M20 12.5V14H12L12 12.5L16 11.5L20 12.5Z" fill="currentColor" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
