import type { SVGProps } from "react";

export const StampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 18V22H20V18" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M2 15.386V18H22V15.386C22 14.5523 21.4829 13.8061 20.7022 13.5133L14 11V5.5L15.8944 4.55279C16.572 4.214 17 3.52148 17 2.76393V1H7V2.76393C7 3.52148 7.428 4.214 8.10557 4.55279L10 5.5V11L3.29775 13.5133C2.51715 13.8061 2 14.5523 2 15.386Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
