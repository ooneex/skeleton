import type { SVGProps } from "react";

export const ClosingQuotationMarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 25.5V25.5C24.7758 24.4175 27.4512 21.0616 27.6651 17.1395L28 11L27.8888 12.8772"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7 25.5V25.5C10.7758 24.4175 13.4512 21.0616 13.6651 17.1395L14 11L13.8888 12.8772"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="9"
        cy="11"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="23"
        cy="11"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
