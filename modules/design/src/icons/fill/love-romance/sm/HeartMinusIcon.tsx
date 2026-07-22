import type { SVGProps } from "react";

export const HeartMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14,20c-1.104,0-2-.896-2-2v-2c0-1.104.896-2,2-2h7.06c.579-.858,1.095-1.784,1.471-2.766,1.318-3.435-.302-7.351-3.612-8.73-2.418-1.011-5.107-.434-6.923,1.376-1.815-1.811-4.502-2.386-6.922-1.376C1.763,3.883.143,7.8,1.461,11.234c1.579,4.116,5.562,7.309,6.744,8.188l3.786,2.825,3.019-2.247h-1.01Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="14" y="16" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
