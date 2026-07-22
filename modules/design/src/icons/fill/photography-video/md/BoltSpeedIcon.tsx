import type { SVGProps } from "react";

export const BoltSpeedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6258 0.167236L19.6817 12.1764H31.2621L13.3742 31.8327L14.3183 19.8235H2.73787L20.6258 0.167236Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5H12V7H3V5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 25H11V27H4V25Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 10H6V12H0V10Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
