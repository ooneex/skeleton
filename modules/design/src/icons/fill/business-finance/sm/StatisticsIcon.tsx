import type { SVGProps } from "react";

export const StatisticsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.4101 2.10848L15.0091 9.3093L9.00911 4.3093L1.89155 10.4101L0.589966 8.89155L8.99092 1.69073L14.9909 6.69073L22.1085 0.589966L23.4101 2.10848Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M8.99092 9.10076L14.9909 14.1008L23 7.1492V22H1V16.093L8.99092 9.10076Z" fill="currentColor" />
    </svg>
  );
};
