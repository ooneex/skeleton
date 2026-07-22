import type { SVGProps } from "react";

export const WaterFaucetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 2H21V4H11V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L12 7L3 7L3.00001 2L12 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M3 9V30H14V24C14 20.134 17.134 17 21 17H30V14C30 11.2386 27.7614 9 25 9H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 17H28V19H23V17Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
