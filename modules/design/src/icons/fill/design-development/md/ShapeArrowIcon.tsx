import type { SVGProps } from "react";

export const ShapeArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.58583 28.0001L27.2929 3.29299L28.7072 4.7072L4.00005 29.4143L2.58583 28.0001Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M27 16V5H16V3H29V16H27Z" fill="currentColor" />
    </svg>
  );
};
