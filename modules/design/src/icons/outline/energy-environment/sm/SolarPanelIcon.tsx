import type { SVGProps } from "react";

export const SolarPanelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 22H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 3V16" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M3.07805 7H20.9072"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2.17827 11H21.8363"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22.4347 13.5503L20.3578 4.55028C20.1483 3.64282 19.3403 3 18.409 3L5.59102 3C4.65971 3 3.85166 3.64282 3.64224 4.55028L1.56532 13.5503C1.27611 14.8035 2.22793 16 3.5141 16L20.4859 16C21.7721 16 22.7239 14.8035 22.4347 13.5503Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
