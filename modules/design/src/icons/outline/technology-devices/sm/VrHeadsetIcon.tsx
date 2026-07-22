import type { SVGProps } from "react";

export const VrHeadsetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 3.5V4H15V3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 11L2 10C2 6.13401 5.13401 3 9 3H15C18.866 3 22 6.13401 22 10V11"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M1 14.5859V14C1 11.2386 3.23858 9 6 9H18C20.7614 9 23 11.2386 23 14V14.5859C23 17.576 20.576 20 17.5859 20C16.0658 20 14.6158 19.361 13.5901 18.2392L13.4488 18.0846C12.6705 17.2334 11.3295 17.2334 10.5512 18.0846L10.4099 18.2392C9.38423 19.361 7.93419 20 6.41413 20C3.42399 20 1 17.576 1 14.5859Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 13V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 13V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 13V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
