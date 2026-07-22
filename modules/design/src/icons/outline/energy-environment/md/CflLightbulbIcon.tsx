import type { SVGProps } from "react";

export const CflLightbulbIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 20V5.5C16 3.567 14.433 2 12.5 2V2C10.567 2 9 3.567 9 5.5V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 20V5.5C23 3.567 21.433 2 19.5 2V2C17.567 2 16 3.567 16 5.5V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 30H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12.5 29L12 25L7 23V20H25V23L20 25L19.5 29H12.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
