import type { SVGProps } from "react";

export const TableLampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 25V30H27V25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 19H38" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M24 40V30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 25V33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M38.9634 21.742L33 3L24 3L15 3L9.03664 21.742C8.52362 23.3544 9.72694 25 11.419 25L36.581 25C38.2731 25 39.4764 23.3544 38.9634 21.742Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M32 45H16V43C16 41.3431 17.3431 40 19 40H29C30.6569 40 32 41.3431 32 43V45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
