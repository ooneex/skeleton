import type { SVGProps } from "react";

export const DiamondIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30.5234L0.753906 13H31.2461L16 30.5234ZM16 29L20.4824 15H11.5L16 29Z"
        fill="currentColor"
      />
      <path
        d="M30.876 11H21L24.8574 5H17.2627L21 11H11L14.7559 5H7.16113L11 11H1.12402L5.82617 3H26.1738L30.876 11Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
