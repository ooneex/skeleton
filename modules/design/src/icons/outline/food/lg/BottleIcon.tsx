import type { SVGProps } from "react";

export const BottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 28H36" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M12 38H36" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M27.5 7H28L28.5 17L29.319 17.2184C33.2587 18.269 36 21.837 36 25.9145V45H12V25.9145C12 21.837 14.7413 18.269 18.681 17.2184L19.5 17L20 7H20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19.5 2H28.5C29.0523 2 29.5 2.44772 29.5 3V7H18.5V3C18.5 2.44772 18.9477 2 19.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
