import type { SVGProps } from "react";

export const CurrencyDollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.2857 4L10 4C7.79086 4 6 5.79086 6 8V8C6 10.2091 7.79086 12 10 12H14C16.2091 12 18 13.7909 18 16V16C18 18.2091 16.2091 20 14 20H7.71429"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 2V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
