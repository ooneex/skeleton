import type { SVGProps } from "react";

export const Heading1Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.109 5H29V27H27V7H26.891L19.9435 13.4131L18.5869 11.9435L26.109 5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2.00002 15H16V17H2.00002V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 5V27H2V5H4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 5V27H14V5H16Z" fill="currentColor" />
    </svg>
  );
};
