import type { SVGProps } from "react";

export const PinTackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19.5858L12.4142 21L4 29.4142L2.58578 28L11 19.5858Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M21.0853 1.67107L10.5233 9.82158C8.2285 8.6884 5.45099 9.1348 3.62601 10.9598L1.58578 13L19 30.4142L21.0402 28.374C22.8652 26.549 23.3116 23.7715 22.1784 21.4767L30.3289 10.9147L21.0853 1.67107Z"
        fill="currentColor"
      />
    </svg>
  );
};
