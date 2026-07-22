import type { SVGProps } from "react";

export const ElectricBatteryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M29 1H35V4H29V1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1H19V4H13V1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 14H8V38H40V14ZM26.7806 18.3861L24.1361 16.9694L18.4947 27.5H24.4947L21.2194 33.6139L23.8639 35.0306L29.5053 24.5H23.5053L26.7806 18.3861Z"
        fill="currentColor"
      />
      <path
        d="M14 46C11.027 46 8.55903 43.8377 8.08295 41H39.917C39.441 43.8377 36.973 46 34 46H14Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M34 6C36.973 6 39.441 8.16229 39.917 11H8.08295C8.55902 8.16229 11.027 6 14 6H34Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
