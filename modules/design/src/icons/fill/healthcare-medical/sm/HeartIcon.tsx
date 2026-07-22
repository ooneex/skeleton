import type { SVGProps } from "react";

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18.919,2.503c-2.418-1.011-5.107-.434-6.923,1.376-1.815-1.811-4.502-2.386-6.922-1.376C1.763,3.883.143,7.8,1.461,11.234c1.579,4.116,5.562,7.309,6.744,8.188l3.786,2.825,3.794-2.824c1.183-.88,5.165-4.071,6.746-8.189,1.318-3.435-.302-7.351-3.612-8.73Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
