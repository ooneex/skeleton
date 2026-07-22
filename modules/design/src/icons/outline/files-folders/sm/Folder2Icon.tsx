import type { SVGProps } from "react";

export const Folder2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 11V18C22 19.1046 21.1046 20 20 20H4"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 7V7C20 5.89543 19.1046 5 18 5H11.9L9.2 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20V20C5.10457 20 6 19.1046 6 18V11H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
