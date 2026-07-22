import type { SVGProps } from "react";

export const CalculatorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 5C28 2.79086 26.2091 1 24 1H8C5.79086 1 4 2.79086 4 5V27C4 29.2091 5.79086 31 8 31H24C26.2091 31 28 29.2091 28 27L28 5ZM24 5L8 5L8 14L24 14V5ZM14 17V19H18V17H14ZM8 17H12V19H8V17ZM20 17V19H24V17H20ZM20 21H24V23H20V21ZM14 21V23H18V21H14ZM8 21H12V23H8V21ZM20 25V27H24V25H20ZM14 25H18V27H14V25ZM8 25V27H12V25H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
