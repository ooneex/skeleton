import type { SVGProps } from "react";

export const TicketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.0299 19.9767L30 20.2192L30 28L2 28V20.1996L3.33264 19.9004C5.15761 19.4908 6.45454 17.8704 6.45454 16C6.45454 14.1296 5.15761 12.5093 3.33264 12.0996L2 11.8004L2 4H30V11.8049L29.1452 11.9919C27.3089 12.3936 26 14.0197 26 15.8995V16.0961C26 17.9316 27.2492 19.5315 29.0299 19.9767ZM16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11Z"
        fill="currentColor"
      />
    </svg>
  );
};
