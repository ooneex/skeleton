import type { SVGProps } from "react";

export const Slacks2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 7V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 7V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 7V10C20 12.2091 21.7909 14 24 14H26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 7V10C12 12.2091 10.2091 14 8 14H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6 7H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M26 30H19.5L17 14H15L12.5 30H6V2H26V30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
