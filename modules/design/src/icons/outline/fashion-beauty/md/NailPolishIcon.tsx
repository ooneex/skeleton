import type { SVGProps } from "react";

export const NailPolishIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 13V3C12 2.44772 12.4477 2 13 2H19C19.5523 2 20 2.44771 20 3V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 30H11C9.34315 30 8 28.6569 8 27V18C8 17.4477 8.44772 17 9 17H23C23.5523 17 24 17.4477 24 18V27C24 28.6569 22.6569 30 21 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12.5 21H19.5L18.5 26H13.5L12.5 21Z"
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
