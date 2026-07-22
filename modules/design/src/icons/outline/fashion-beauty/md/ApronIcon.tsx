import type { SVGProps } from "react";

export const ApronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27 17L30 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 17L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11.5835 10H20.4233"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M27 30H5V12H8.11111C10.3203 12 12.1111 10.2091 12.1111 8V5.88889C12.1111 3.74111 13.8522 2 16 2C18.1478 2 19.8889 3.74111 19.8889 5.88889V8C19.8889 10.2091 21.6797 12 23.8889 12H27V30Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 18H21V20C21 22.7614 18.7614 25 16 25C13.2386 25 11 22.7614 11 20V18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
