import type { SVGProps } from "react";

export const HeartsSuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 29C19.2161 27.5294 30.5 19.3794 30.5 11.9088C30.5 7.54117 27.0026 4 22.6932 4C19.8512 4 17.7284 5.80588 16 7.83235C14.2745 5.80294 12.1488 4 9.3068 4C4.9945 4 1.5 7.54117 1.5 11.9088C1.5 19.3794 12.7839 27.5294 16 29Z"
        fill="currentColor"
      />
    </svg>
  );
};
