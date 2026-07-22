import type { SVGProps } from "react";

export const SearchChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 4L16 16L11 11L4 18L4.5 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21.3929 18.5649L28.4139 25.5859C29.1949 26.3669 29.1949 27.6329 28.4139 28.4139C27.6329 29.1949 26.3669 29.1949 25.5859 28.4139L18.5649 21.3929"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19.6146 5.5C17.8517 3.94409 15.5361 3 13 3C7.47715 3 3 7.47715 3 13C3 18.5228 7.47715 23 13 23C17.6596 23 21.5748 19.8131 22.685 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
