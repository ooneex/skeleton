import type { SVGProps } from "react";

export const AirBombIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 8V12.9287C16 14.52 15.3674 16.0467 14.2422 17.1719L11.9141 19.5L4.5 12.0859L6.82812 9.75781C7.95334 8.63259 9.47999 8 11.0713 8H16Z"
        fill="currentColor"
      />
      <path
        d="M10.4453 20.8594C9.42842 21.5951 8.19967 22 6.92871 22H2V17.0713C2 15.8003 2.40381 14.5706 3.13965 13.5537L10.4453 20.8594Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M19.7225 4.27646L23.9901 6.42392L19.5009 10.9132L15.5292 8.91513L15.2343 8.76572L15.0848 8.47079L13.0868 4.49911L17.576 0.00985718L19.7225 4.27646Z"
        fill="currentColor"
      />
    </svg>
  );
};
