import type { SVGProps } from "react";

export const GavelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 29H10V32H4V29Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75001 21.1287L12.1213 25.5L10 27.6213L5.62869 23.25L7.75001 21.1287Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M12.5858 20.2635L23.8995 31.5772L27.4978 27.9789C28.0675 27.4091 28.3841 26.6341 28.3763 25.8284L28.3657 24.7419L34.7419 18.3657L35.8284 18.3763C36.6341 18.3841 37.4091 18.0675 37.9789 17.4978L41.5772 13.8995L30.2635 2.58582L26.6652 6.18407C26.0954 6.75384 25.7788 7.52887 25.7867 8.33462L25.7973 9.42111L19.4211 15.7973L18.3346 15.7867C17.5289 15.7788 16.7538 16.0954 16.1841 16.6652L12.5858 20.2635Z"
        fill="currentColor"
      />
      <path d="M32 26L38.0417 32.9913L42.9914 28.0416L36 22L32 26Z" fill="currentColor" data-color="color-2" />
      <path
        d="M33 36V39H34C35.6569 39 37 40.3431 37 42V45H4V42C4 40.3431 5.34315 39 7 39H8V36H33Z"
        fill="currentColor"
      />
    </svg>
  );
};
