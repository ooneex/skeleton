import type { SVGProps } from "react";

export const EnergySupplementIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 9.06348L27.6006 12.1699C28.5045 13.2497 29 14.6132 29 16.0215V27C29 29.2091 27.2091 31 25 31H7C4.79087 31 3.00001 29.2091 3 27V16.0215C3 14.6132 3.49547 13.2497 4.39941 12.1699L7 9.06348H25ZM15.5 12L10.5 22H15.5L15 28H16.5L21.5 18H16.5L17 12H15.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 7H5V1H27V7ZM9 3V5H11V3H9ZM13 5H15V3H13V5ZM17 5H19V3H17V5ZM21 5H23V3H21V5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
