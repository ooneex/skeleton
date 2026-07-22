import type { SVGProps } from "react";

export const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M42.1678 36H44H31.2811C29.6341 36 28.0927 35.1889 27.16 33.8314L23.8406 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 36H9.52959C11.1766 36 12.718 35.1889 13.6507 33.8314L27.16 14.1686C28.0927 12.8111 29.6341 12 31.2811 12H44H42.1679"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M37 5L44 12L37 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M37 29L44 36L37 43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 12H9.52959C11.1766 12 12.718 12.8111 13.6507 14.1686L16.9701 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
