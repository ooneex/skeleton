import type { SVGProps } from "react";

export const ExpandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 11H2V6C2 3.794 3.794 2 6 2H11V4H6C4.897 4 4 4.897 4 6V11Z" fill="currentColor" />
      <path
        d="M30 11H28V6C28 4.897 27.103 4 26 4H21V2H26C28.206 2 30 3.794 30 6V11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M26 30H21V28H26C27.103 28 28 27.103 28 26V21H30V26C30 28.206 28.206 30 26 30Z" fill="currentColor" />
      <path
        d="M11 30H6C3.794 30 2 28.206 2 26V21H4V26C4 27.103 4.897 28 6 28H11V30Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
