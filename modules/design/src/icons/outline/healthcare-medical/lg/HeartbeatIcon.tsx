import type { SVGProps } from "react";

export const HeartbeatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M40.6513 29C43.2125 25.6114 45 21.9466 45 18.3887C45 12.0993 39.9348 7 33.6936 7C29.5776 7 26.5032 9.60047 24 12.5186C21.501 9.59624 18.4224 7 14.3064 7C8.061 7 3 12.0993 3 18.3887C3 21.9466 4.78754 25.6114 7.34873 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 34H10.2L12.5 29.5L20 43L27.5 24.5L34.5 38.5L36.8 34H44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
