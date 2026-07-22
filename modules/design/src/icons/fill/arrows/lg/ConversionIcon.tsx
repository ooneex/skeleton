import type { SVGProps } from "react";

export const ConversionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 3V17H4V20H45.4142L27 3Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 45V31H44V28H2.58578L21 45Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
