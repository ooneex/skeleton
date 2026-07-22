import type { SVGProps } from "react";

export const MapPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 2.31592L1 5.81592V28.9618L10 25.4618V2.31592Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 21C19 17.6863 21.6863 15 25 15C28.3137 15 31 17.6863 31 21C31 24.3137 28.3137 27 25 27C21.6863 27 19 24.3137 19 21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 31H24L24 26H26L26 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M20 29.6182L12 25.6181V2.38208L20 6.38209V14.7547C18.1711 16.2209 17 18.4737 17 21.0001C17 23.5265 18.1711 25.7794 20 27.2455V29.6182Z"
        fill="currentColor"
      />
      <path
        d="M31 15.7083C29.5341 14.0474 27.3894 12.9999 25 12.9999C23.9391 12.9999 22.9264 13.2064 22 13.5814V6.53808L31 3.03809V15.7083Z"
        fill="currentColor"
      />
    </svg>
  );
};
