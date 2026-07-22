import type { SVGProps } from "react";

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15L29 15L29 17L2 17L2 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5859 6.00003L27.5859 16L17.5859 26L19.0002 27.4142L30.4144 16L19.0002 4.58582L17.5859 6.00003Z"
        fill="currentColor"
      />
    </svg>
  );
};
