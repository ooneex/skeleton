import type { SVGProps } from "react";

export const MapHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 13V8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 3V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M14.5 25.75L11 24L2 27.5V6.5L11 3L21 8L30 4.5V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 29C25.5526 28.2941 31 24.3821 31 20.7962C31 18.6998 29.3116 17 27.2312 17C25.8592 17 24.8344 17.8668 24 18.8395C23.167 17.8654 22.1408 17 20.7688 17C18.687 17 17 18.6998 17 20.7962C17 24.3821 22.4474 28.2941 24 29Z"
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
