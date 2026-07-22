import type { SVGProps } from "react";

export const MilkContainerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 27C28 29.2091 26.2091 31 24 31H8C5.79086 31 4 29.2091 4 27V14H28V27ZM16 18C13.5147 18 11.5 20.0147 11.5 22.5C11.5 24.9853 13.5147 27 16 27C18.4853 27 20.5 24.9853 20.5 22.5C20.5 20.0147 18.4853 18 16 18Z"
        fill="currentColor"
      />
      <path d="M27.6182 12H4.38184L6.48145 7H25.5186L27.6182 12Z" fill="currentColor" />
      <path d="M25 5H7V1H25V5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
