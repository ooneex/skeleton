import type { SVGProps } from "react";

export const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36 2C39.3137 2 42 4.68629 42 8V40C42 43.3137 39.3137 46 36 46H11C9.629 46 8.36539 45.5402 7.35501 44.7663L28 24.1213L28 35.1421H31L31 21.1213L31.0607 21.0607L31 21.0001V19L29 19L28.9393 18.9393L28.8787 19L14.8579 19V22L25.8787 22L5.49301 42.3857C5.17583 41.6545 5 40.8478 5 40V8C5 4.68629 7.68629 2 11 2H36Z"
        fill="currentColor"
      />
    </svg>
  );
};
