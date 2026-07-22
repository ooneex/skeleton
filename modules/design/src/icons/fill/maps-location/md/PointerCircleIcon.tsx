import type { SVGProps } from "react";

export const PointerCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1ZM27.2194 14.6771L8.97607 8.97607L14.6771 27.2194L18.7493 18.7493L27.2194 14.6771Z"
        fill="currentColor"
      />
    </svg>
  );
};
