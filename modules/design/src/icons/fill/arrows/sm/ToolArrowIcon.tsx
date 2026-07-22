import type { SVGProps } from "react";

export const ToolArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4142 6.00003L3.00003 22.4142L1.58582 21L18 4.58582L19.4142 6.00003Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M19.6715 11.3996L12.6005 4.32849L22.5 1.50006L19.6715 11.3996Z" fill="currentColor" />
    </svg>
  );
};
