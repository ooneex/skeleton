import type { SVGProps } from "react";

export const CeilingLightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V17H16V18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1V4H11V1H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V8.26552L23 12.3905V15H1V12.3905L9 8.26552V6Z"
        fill="currentColor"
      />
    </svg>
  );
};
