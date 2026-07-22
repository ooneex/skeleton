import type { SVGProps } from "react";

export const ScentedCandleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 15V25C3 27.2091 8.8203 29 16 29C23.1797 29 29 27.2091 29 25V15"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 9.61249C11 8.80302 11.625 5.23491 11.625 5.23491L13.0313 6.00513L16 2C16 2 21 6.00513 21 9.61249C21 12.8124 18.4373 14 16 14C13.5627 14 11 12.8124 11 9.61249Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7.40107 12C4.7022 12.7329 3 13.8053 3 15C3 17.2091 8.8203 19 16 19C23.1797 19 29 17.2091 29 15C29 13.8053 27.2978 12.7329 24.5989 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M6 3.00707L6.00707 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M26 6.00707L26.0071 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
