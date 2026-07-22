import type { SVGProps } from "react";

export const VirtualSpaceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 15.4013C8.47087 15.1461 10.1786 15 12 15C13.8214 15 15.5291 15.1461 17 15.4013"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2 6C2 4.34315 6.47715 3 12 3C17.5228 3 22 4.34315 22 6M2 6C2 7.11042 4.01099 8.07994 7 8.59865V20.5987C4.01099 20.0799 2 19.1104 2 18V6ZM22 6C22 7.11042 19.989 8.07994 17 8.59865V20.5987C19.989 20.0799 22 19.1104 22 18V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
