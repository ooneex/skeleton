import type { SVGProps } from "react";

export const TombstoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 16V9C5 5.13401 8.13401 2 12 2V2C15.866 2 19 5.13401 19 9V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 21H6C6 20.1715 6.73264 19.5 7.63636 19.5C8.04441 19.5 8.41295 19.6418 8.69954 19.8683C9.18723 18.7732 10.3572 18 11.7273 18C13.5348 18 15 19.3431 15 21H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 7V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 9H14"
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
