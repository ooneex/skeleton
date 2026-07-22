import type { SVGProps } from "react";

export const SliceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.6498 12.7016L4.71518 29.909L18.2862 26.2726L16.7278 20.4565L19.5662 15.5401"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M14.6254 12.7423L19.5928 4.13862C20.7685 2.10218 23.3725 1.40445 25.4089 2.58019C27.4453 3.75592 28.1431 6.3599 26.9673 8.39633L22 17L14.6254 12.7423Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
