import type { SVGProps } from "react";

export const Trees2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 17V25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 25V29H29V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.4 8.33333L16 9L19.5 3L25 13.5L23 14L25.5 21H20V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 21C15.0376 21 17.5 18.3137 17.5 15C17.5 9.42857 12 3 12 3C12 3 6.5 9.42857 6.5 15C6.5 18.3137 8.96243 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
