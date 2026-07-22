import type { SVGProps } from "react";

export const FlaskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m6,2h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m15,6v7s3.927,5.891,3.927,5.891c.886,1.329-.067,3.109-1.664,3.109H6.737c-1.597,0-2.55-1.78-1.664-3.109l3.927-5.891v-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
