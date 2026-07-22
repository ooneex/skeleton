import type { SVGProps } from "react";

export const CloudIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m15,4c-3.8,0-7,2.6-7.8,6.2-.4-.1-.8-.2-1.2-.2-2.8,0-5,2.2-5,5s2.2,5,5,5h9c4.4,0,8-3.6,8-8s-3.6-8-8-8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
