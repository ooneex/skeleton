import type { SVGProps } from "react";

export const ShieldLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="8"
        y="11"
        width="8"
        height="5"
        rx="1"
        ry="1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m10,11v-3c.003-1.103.897-1.997,2-2h0c1.103.003,1.997.897,2,2v3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m12,22s9-2,9-11v-7c-3.203,0-6.11-.731-9-2-2.89,1.269-5.797,2-9,2v7c0,9,9,11,9,11Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
