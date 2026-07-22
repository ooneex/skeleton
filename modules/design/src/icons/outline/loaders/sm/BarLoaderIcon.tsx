import type { SVGProps } from "react";

export const BarLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path opacity="0.6" d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        opacity="0.4"
        d="M5.005 11.995L2.005 11.995"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.8"
        d="M22.005 11.995L19.005 11.995"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.5"
        d="M7.0517 16.9462L4.93038 19.0675"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.9"
        d="M19.0725 4.92539L16.9512 7.04671"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.3"
        d="M7.05878 7.04672L4.93746 4.9254"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        opacity="0.7"
        d="M19.0796 19.0675L16.9583 16.9462"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
