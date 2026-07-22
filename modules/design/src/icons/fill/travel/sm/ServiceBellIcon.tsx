import type { SVGProps } from "react";

export const ServiceBellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C6.47715 6 2 10.4772 2 16V18H22V16C22 10.4772 17.5228 6 12 6ZM8.79957 12.6006C9.53103 11.6268 10.6924 11 12.0004 11H13.0004V9H12.0004C10.0367 9 8.29339 9.94434 7.20043 11.3994L6.59986 12.199L8.19899 13.4001L8.79957 12.6006Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 6V3H13V6H11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 20H22V22H2V20Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 2H16V4H8V2Z" fill="currentColor" />
    </svg>
  );
};
