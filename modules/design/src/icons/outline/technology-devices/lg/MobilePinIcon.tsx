import type { SVGProps } from "react";

export const MobilePinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26.5 45L16 45C13.2386 45 11 42.7614 11 40L11 8C11 5.23858 13.2386 3 16 3L32 3C34.7614 3 37 5.23858 37 8L37 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M26.5 9L21.5 9C21.2239 9 21 8.77614 21 8.5C21 8.22386 21.2239 8 21.5 8L26.5 8C26.7761 8 27 8.22386 27 8.5C27 8.77614 26.7761 9 26.5 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M34.5 45C39.447 41.6031 43 37.7364 43 33.2051C43 28.6738 39.1941 25 34.5 25C29.8059 25 26 28.6738 26 33.2051C26 37.7364 29.553 41.6031 34.5 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M34.5 35C35.3284 35 36 34.3284 36 33.5C36 32.6716 35.3284 32 34.5 32C33.6716 32 33 32.6716 33 33.5C33 34.3284 33.6716 35 34.5 35Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
