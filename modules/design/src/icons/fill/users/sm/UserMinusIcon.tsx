import type { SVGProps } from "react";

export const UserMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="11" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m12,19v-2c0-1.104.896-2,2-2h3.689c-1.649-1.836-4.033-3-6.689-3-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025s5.508-.342,8.243-1.025l.757-.189v-.781h-6c-1.104,0-2-.896-2-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="14" y="17" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
