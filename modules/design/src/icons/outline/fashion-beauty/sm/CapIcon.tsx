import type { SVGProps } from "react";

export const CapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 14C5 14 1 15.4 1 17C1 18.8 7.2 21 11 21C15 21 21 16 21 16L21.1118 15.9197"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 2.20001C16 3.10001 19 6.70001 19 11V16.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M23 15C23 15 20.3 17 14 17C7.7 17 5 15 5 15V11C5 6 9 2 14 2C19 2 23 6 23 11V15Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
