import type { SVGProps } from "react";

export const EmptyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.0608 5.06065L5.06077 45.0607L2.93945 42.9393L42.9395 2.93933L45.0608 5.06065Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 2C11.8497 2 2 11.8497 2 24C2 29.5353 4.04427 34.5932 7.41902 38.4598L38.4598 7.41902C34.5932 4.04427 29.5353 2 24 2Z"
        fill="currentColor"
      />
      <path
        d="M11.9526 42.4113C15.4134 44.6804 19.5525 46 23.9999 46C36.1502 46 45.9999 36.1503 45.9999 24C45.9999 19.5526 44.6802 15.4135 42.4111 11.9528L11.9526 42.4113Z"
        fill="currentColor"
      />
    </svg>
  );
};
