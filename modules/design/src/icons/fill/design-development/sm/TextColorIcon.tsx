import type { SVGProps } from "react";

export const TextColorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 17C2 15.8954 2.89543 15 4 15H20C21.1046 15 22 15.8954 22 17V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V17Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 10H9V8H15V10Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8159 2H13.1841L17.4618 13H14.8858V11.8941L12 4.47332L9.11529 11.8911V13H6.53816L10.8159 2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
