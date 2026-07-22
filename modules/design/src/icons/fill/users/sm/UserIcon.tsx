import type { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="5.5" r="4.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m12,12c-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025s5.508-.342,8.243-1.025l.757-.189v-.781c0-4.962-4.038-9-9-9Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
