import type { SVGProps } from "react";

export const HexagonUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 13C13.3807 13 14.5 11.8807 14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17.4021 19.4018C16.4353 17.3897 14.3822 16 12 16C9.61787 16 7.56473 17.3897 6.5979 19.4018"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M12 1.5L21.0933 6.75V17.25L12 22.5L2.90673 17.25V6.75L12 1.5Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
