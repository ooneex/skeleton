import type { SVGProps } from "react";

export const PriorityLowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.8994 13.4141L13.4142 21.8994C12.6331 22.6804 11.3668 22.6804 10.5857 21.8994L2.10045 13.4141C1.3194 12.633 1.3194 11.3667 2.10045 10.5857L10.5857 2.10038C11.3668 1.31934 12.6331 1.31934 13.4142 2.10038L21.8994 10.5857C22.6805 11.3667 22.6805 12.633 21.8994 13.4141Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8 13L12 17L16 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
