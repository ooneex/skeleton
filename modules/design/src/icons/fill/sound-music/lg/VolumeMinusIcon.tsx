import type { SVGProps } from "react";

export const VolumeMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 2.2962L16.6243 14H8C4.68629 14 2 16.6863 2 20V28C2 31.3137 4.68629 34 8 34H16.6243L30 45.7037V2.2962Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 25.5L47 25.5L47 22.5L33 22.5L33 25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
