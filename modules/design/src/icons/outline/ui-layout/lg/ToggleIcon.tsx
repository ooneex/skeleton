import type { SVGProps } from "react";

export const ToggleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M33 11H15C7.8203 11 2 16.8203 2 24C2 31.1797 7.8203 37 15 37H33C40.1797 37 46 31.1797 46 24C46 16.8203 40.1797 11 33 11Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M15 32C19.4183 32 23 28.4183 23 24C23 19.5817 19.4183 16 15 16C10.5817 16 7 19.5817 7 24C7 28.4183 10.5817 32 15 32Z"
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
