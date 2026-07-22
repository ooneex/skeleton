import type { SVGProps } from "react";

export const OctagonCopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5858 8H23.4133L33 17.5576V30.4142L23.4142 40H10.5858L1 30.4142V17.5858L10.5858 8Z"
        fill="currentColor"
      />
      <path
        d="M27.6567 40H37.4141L46.9999 30.4142V17.5576L37.4132 8H27.6623L35.9999 16.3123V31.6569L27.6567 40Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
