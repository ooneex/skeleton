import type { SVGProps } from "react";

export const MonitorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 43V35H25.5V43H22.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 41H35V44H13V41Z" fill="currentColor" data-color="color-2" />
      <path
        d="M2 30C2 33.3137 4.68629 36 8 36L40 36C43.3137 36 46 33.3137 46 30L46 12C46 8.6863 43.3137 6.00001 40 6L8 6C4.68629 6 2 8.68629 2 12L2 30Z"
        fill="currentColor"
      />
    </svg>
  );
};
