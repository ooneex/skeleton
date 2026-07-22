import type { SVGProps } from "react";

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3.5 2.5V7.5H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20.5 21.5V16.5H15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2.49996 12C2.49996 17.2467 6.75325 21.5 12 21.5C15.6185 21.5 18.7646 19.4769 20.3687 16.5L20.2157 16.7729"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C8.38143 2.5 5.23538 4.52315 3.63131 7.5L3.73595 7.311"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
