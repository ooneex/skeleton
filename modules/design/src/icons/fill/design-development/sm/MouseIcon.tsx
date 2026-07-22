import type { SVGProps } from "react";

export const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14V10C3 5.02943 7.02944 1 12 1C16.9706 1 21 5.02944 21 10L21 14ZM13 6H11V11H13V6Z"
        fill="currentColor"
      />
    </svg>
  );
};
