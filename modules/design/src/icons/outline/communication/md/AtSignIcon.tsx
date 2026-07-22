import type { SVGProps } from "react";

export const AtSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m20.2,29.359c-1.326.416-2.737.641-4.2.641-7.732,0-14-6.268-14-14S8.268,2,16,2s14,6.344,14,14c0,4.105-2.18,6-4.5,6s-3.5-2-3.5-5v-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
