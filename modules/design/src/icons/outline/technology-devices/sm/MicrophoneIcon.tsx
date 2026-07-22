import type { SVGProps } from "react";

export const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 10L16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6L8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 10V10C20 14.4183 16.4183 18 12 18V18C7.58172 18 4 14.4183 4 10V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
