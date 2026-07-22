import type { SVGProps } from "react";

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13L21 13L21 11L2 11L2 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5857 5.00003L19.5857 12L12.5857 19L13.9999 20.4142L22.4141 12L13.9999 3.58582L12.5857 5.00003Z"
        fill="currentColor"
      />
    </svg>
  );
};
