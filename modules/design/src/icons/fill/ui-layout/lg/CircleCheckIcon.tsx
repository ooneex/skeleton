import type { SVGProps } from "react";

export const CircleCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM20.1078 34.2289L36.1117 14.7957L33.7959 12.8885L19.8926 29.7711L14.0002 23.8787L11.8789 26L20.1078 34.2289Z"
        fill="currentColor"
      />
    </svg>
  );
};
