import type { SVGProps } from "react";

export const SplitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43.5 12H44H26.6311C24.9841 12 23.4427 12.8111 22.51 14.1686L15.7553 24H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43.5 36H44H26.6311C24.9841 36 23.4427 35.1889 22.51 33.8314L15.7553 24H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M37 5L44 12L37 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M37 29L44 36L37 43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
