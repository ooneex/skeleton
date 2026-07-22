import type { SVGProps } from "react";

export const BorderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 2H2V22H22V2ZM13 5V9H11V5H13ZM13 15H11V19H13V15ZM19 13H15V11H19V13ZM9 13V11H5V13H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
