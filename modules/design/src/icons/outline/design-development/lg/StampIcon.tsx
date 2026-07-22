import type { SVGProps } from "react";

export const StampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 37.9683V43H40V37.9683"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 33.9595V38H43V33.9595C43 32.201 41.8515 30.6487 40.1698 30.1344L28.2857 26.5V11L32.3945 8.84288C33.3817 8.32461 34 7.30163 34 6.18668V3H14V6.18668C14 7.30163 14.6183 8.32461 15.6055 8.84288L19.7143 11V26.5L7.83018 30.1344C6.14853 30.6487 5 32.201 5 33.9595Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
