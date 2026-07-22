import type { SVGProps } from "react";

export const BarsFilterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 19.5H40V22.5H8V19.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 11.5H46V14.5H2V11.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 27.5H34V30.5H14V27.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 35.5H28V38.5H20V35.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
