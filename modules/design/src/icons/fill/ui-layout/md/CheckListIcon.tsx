import type { SVGProps } from "react";

export const CheckListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 3H20V5H2V3Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 9H12V11H2V9Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5553 8.42743L11.0346 28.9544L2.7287 20.5856L4.14824 19.1767L10.9654 26.0456L28.0703 7.08765L29.5553 8.42743Z"
        fill="currentColor"
      />
    </svg>
  );
};
