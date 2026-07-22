import type { SVGProps } from "react";

export const FeatherIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="-.899"
        y="21"
        width="21.799"
        height="2"
        transform="translate(-12.627 13.515) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m28.983,2c-10.372.174-17.787,3.01-21.443,8.202-2.787,3.958-3.224,9.108-1.263,14.894l.158.468.468.159c2.377.805,4.646,1.207,6.769,1.207,3.047,0,5.794-.827,8.126-2.469,1.541-1.086,2.87-2.51,3.988-4.238l-6.586-2.822,8.871-1.971c1.191-3.454,1.849-7.612,1.929-12.412l.018-1.034-1.034.017Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
