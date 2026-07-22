import type { SVGProps } from "react";

export const FaceManIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,18.5c1.381,0,2.5-1.119,2.5-2.5h-5c0,1.381,1.119,2.5,2.5,2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="8.25" cy="13.25" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="15.75" cy="13.25" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m12,1C6.486,1,2,5.486,2,11v2c0,5.514,4.486,10,10,10s10-4.486,10-10v-2c0-5.514-4.486-10-10-10Zm8,12c0,4.411-3.589,8-8,8s-8-3.589-8-8v-2c0-.006,0-.011,0-.017.84-.916,1.906-.981,3.744-.981h.06c2.072-.008,4.608.003,7.262-1.966,1.779,2.322,3.79,3.167,4.933,3.473v1.491Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
