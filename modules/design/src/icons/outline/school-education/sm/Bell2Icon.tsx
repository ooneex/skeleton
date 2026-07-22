import type { SVGProps } from "react";

export const Bell2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.45 14C14.4828 14.1616 14.5 14.3288 14.5 14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5C9.5 14.3288 9.51722 14.1616 9.55001 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 15.3564L4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V15.3564"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M8 10C8 7.79086 9.79086 6 12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 21C17.5228 21 22 19.433 22 17.5C22 15.567 17.5228 14 12 14C6.47715 14 2 15.567 2 17.5C2 19.433 6.47715 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
