import type { SVGProps } from "react";

export const CardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.0759 26L9.74072 27.251L25.1955 31.3921L31.1484 9.1758L21 6.45654V24C21 25.1046 20.1045 26 19 26H10.0759Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1H19V24H3V1ZM7.5 12.5L11 7.5L14.5 12.5L11 17.5L7.5 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
