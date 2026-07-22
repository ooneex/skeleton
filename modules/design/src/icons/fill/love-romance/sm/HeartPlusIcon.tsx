import type { SVGProps } from "react";

export const HeartPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14,20c-1.104,0-2-.896-2-2v-2c0-1.104.896-2,2-2h2v-2c0-1.104.896-2,2-2h2c1.104,0,2,.896,2,2v.407c.195-.382.377-.772.531-1.173,1.318-3.435-.302-7.351-3.612-8.73-2.418-1.011-5.107-.434-6.923,1.376-1.815-1.811-4.502-2.386-6.922-1.376C1.763,3.883.143,7.8,1.461,11.234c1.579,4.116,5.562,7.309,6.744,8.188l3.786,2.825,3.019-2.247h-1.01Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="24 16 20 16 20 12 18 12 18 16 14 16 14 18 18 18 18 22 20 22 20 18 24 18 24 16"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
