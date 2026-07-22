import type { SVGProps } from "react";

export const SignboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.78333 2H18.8219L22.9667 23H20.6363V21.5216L19.9412 18H8.9798L9.96664 23H7.70476V21.8686L3.78333 2Z"
        fill="currentColor"
      />
      <path
        d="M2.86845 7.69348L0 20L2.28845 20.0001V18.8906L2.96857 16.0001H4.50791L2.86845 7.69348Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
