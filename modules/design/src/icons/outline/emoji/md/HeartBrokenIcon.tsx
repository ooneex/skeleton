import type { SVGProps } from "react";

export const HeartBrokenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 21L19 16L12.5 12.5L16 8.67906C17.6688 6.73365 19.7184 5 22.4624 5C26.6232 5 30 8.39953 30 12.5925C30 19.7642 19.1052 27.5882 16 29C12.8948 27.5882 2 19.7642 2 12.5925C2 8.39953 5.374 5 9.5376 5C10.2213 5 11.5 5 13 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
