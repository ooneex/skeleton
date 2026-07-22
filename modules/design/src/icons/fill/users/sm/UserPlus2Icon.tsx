import type { SVGProps } from "react";

export const UserPlus2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="24 10 21 10 21 7 19 7 19 10 16 10 16 12 19 12 19 15 21 15 21 12 24 12 24 10"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="10" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m10,12c-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025s5.508-.342,8.243-1.025l.757-.189v-.781c0-4.962-4.038-9-9-9Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
