import type { SVGProps } from "react";

export const StampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 28H29V31H3V28Z" fill="currentColor" data-color="color-2" />
      <path
        d="M8 1V3.64593C8 4.87265 8.74685 5.97577 9.88583 6.43136L13 7.67703V15.2192L4.02986 17.4618C2.24919 17.9069 1 19.5069 1 21.3423V26H31V21.3423C31 19.5069 29.7508 17.9069 27.9701 17.4618L19 15.2192V7.67703L22.1142 6.43136C23.2531 5.97577 24 4.87265 24 3.64593V1H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
