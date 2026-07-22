import type { SVGProps } from "react";

export const ConversionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 1.08582V8.00003H2V10H22.9142L14 1.08582Z" fill="currentColor" />
      <path d="M1.08569 14L9.99991 22.9142V16H21.9999V14H1.08569Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
