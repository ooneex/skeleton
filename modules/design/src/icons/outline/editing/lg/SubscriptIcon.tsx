import type { SVGProps } from "react";

export const SubscriptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27.7347 5H28L7 43H7.27072" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M27.7347 43H28L7 5H7.27072" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M45 43H35V41.8571V41.8571C35 40.4675 35.8193 39.2086 37.0899 38.6459L42.0647 36.4428C43.8493 35.6525 45 33.8843 45 31.9326V31.9326C45 29.2084 42.7916 27 40.0674 27H39.5714C37.0467 27 35 29.0467 35 31.5714V31.5714"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
