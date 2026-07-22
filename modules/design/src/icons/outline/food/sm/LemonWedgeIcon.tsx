import type { SVGProps } from "react";

export const LemonWedgeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 10H10" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M10 10V17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M10 10.0071L15 15.0071"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5.05027 14.9497C7.78394 17.6834 12.2161 17.6834 14.9498 14.9497C17.6834 12.2161 17.6834 7.7839 14.9498 5.05023"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2.22185 17.7782C6.51762 22.0739 13.4824 22.0739 17.7782 17.7782C22.074 13.4824 22.074 6.51757 17.7782 2.2218L2.22185 17.7782Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
