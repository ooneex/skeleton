import type { SVGProps } from "react";

export const ReservedTagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6.28023 7L5.05522 7L1.9056 21.1746C1.69745 22.1114 2.41028 23 3.36989 23L9 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M30.0896 23.1715L26.4596 7L5.5 7L9.18979 23.438C9.39475 24.3511 10.2054 25 11.1412 25L28.626 25C29.5869 25 30.3 24.1091 30.0896 23.1715Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M22 14L13.5 14L14.5 18L23 18L22 14Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
