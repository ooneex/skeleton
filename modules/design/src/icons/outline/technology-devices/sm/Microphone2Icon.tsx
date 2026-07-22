import type { SVGProps } from "react";

export const Microphone2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 11L16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6L8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 11V11C20 15.4183 16.4183 19 12 19V19C7.58172 19 4 15.4183 4 11V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
