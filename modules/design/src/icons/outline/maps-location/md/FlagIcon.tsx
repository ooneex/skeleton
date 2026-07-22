import type { SVGProps } from "react";

export const FlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 29V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M22.645 22.5041L28 21.5V5.50001L22.645 6.50406C20.9289 6.82583 19.1547 6.57734 17.593 5.7965L16.5405 5.27023C14.8971 4.44854 13.0209 4.21757 11.2273 4.61616L9 5.11112V21.1111L11.2273 20.6162C13.0209 20.2176 14.8971 20.4485 16.5405 21.2702L17.593 21.7965C19.1547 22.5773 20.9289 22.8258 22.645 22.5041Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
