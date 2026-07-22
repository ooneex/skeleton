import type { SVGProps } from "react";

export const ShapeArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.58583 20.0001L19.2929 3.29299L20.7072 4.7072L4.00005 21.4143L2.58583 20.0001Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 12V5H12V3H21V12H19Z" fill="currentColor" />
    </svg>
  );
};
