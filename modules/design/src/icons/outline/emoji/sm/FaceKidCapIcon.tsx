import type { SVGProps } from "react";

export const FaceKidCapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 2V1H12V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <circle cx="9.5" cy="12.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <circle cx="16.5" cy="12.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <path
        d="M13 18C14.2267 18 15.3675 17.6318 16.3178 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21.8345 9C22.264 10.0831 22.5 11.264 22.5 12.5C22.5 17.7467 18.2467 22 13 22C7.75329 22 3.5 17.7467 3.5 12.5C3.5 11.264 3.73604 10.0831 4.16551 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4 8.81582L4 6.5C3.99999 4.01472 6.01471 2 8.5 2L17.5 2C19.9853 2 22 4.01472 22 6.5L22 9L1 9"
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
