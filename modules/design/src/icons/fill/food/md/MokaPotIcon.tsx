import type { SVGProps } from "react";

export const MokaPotIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 9V6H24V4H30V9C30 11.7614 27.7614 14 25 14H22.5V12H25C26.6569 12 28 10.6569 28 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23.2803 16H9.71973L8.09766 9.51172L5 6.41406V4H26.2812L23.2803 16Z" fill="currentColor" />
      <path d="M19 0V2H13V0H19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 26.8535V31H7V26.8535L9.65527 18H23.3438L26 26.8535ZM13 21V23H15.0137V21H13Z"
        fill="currentColor"
      />
    </svg>
  );
};
