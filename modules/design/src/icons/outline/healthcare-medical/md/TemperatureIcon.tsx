import type { SVGProps } from "react";

export const TemperatureIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 12V21V19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 25C17.1046 25 18 24.1046 18 23C18 21.8954 17.1046 21 16 21C14.8954 21 14 21.8954 14 23C14 24.1046 14.8954 25 16 25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 30C19.866 30 23 26.866 23 23C23 21.0927 22.2372 19.3636 21 18.101V7C21 4.23858 18.7614 2 16 2C13.2386 2 11 4.23858 11 7V18.101C9.76281 19.3636 9 21.0927 9 23C9 26.866 12.134 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
