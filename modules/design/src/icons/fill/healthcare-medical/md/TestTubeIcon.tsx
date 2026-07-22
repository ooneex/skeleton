import type { SVGProps } from "react";

export const TestTubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 5L22 5.5V25C22 28.3137 19.3137 31 16 31C12.6863 31 10 28.3137 10 25V5.5L6 5V1H26V5ZM12 22H16V20H12V22ZM12 17H16V15H12V17ZM12 10V12H16V10H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
