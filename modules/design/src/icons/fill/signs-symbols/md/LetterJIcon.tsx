import type { SVGProps } from "react";

export const LetterJIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 21V19H8V21C8 24.866 11.134 28 15 28C18.866 28 22 24.866 22 21V4H16V2H24V21C24 25.9706 19.9706 30 15 30C10.0294 30 6 25.9706 6 21Z"
        fill="currentColor"
      />
    </svg>
  );
};
