import type { SVGProps } from "react";

export const LiftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 44H30V4H18V44Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 41C36.134 41 33 37.866 33 34C33 30.134 36.134 27 40 27C43.866 27 47 30.134 47 34C47 37.866 43.866 41 40 41ZM44 32L40 37.5L36 32H44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 7C36.134 7 33 10.134 33 14C33 17.866 36.134 21 40 21C43.866 21 47 17.866 47 14C47 10.134 43.866 7 40 7ZM44 16L40 10.5L36 16H44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M15 4H3V44H15V4Z" fill="currentColor" />
    </svg>
  );
};
