import type { SVGProps } from "react";

export const EnvelopeContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 18.3234L38.1947 15.2655L39.8053 12.7345L46 16.6766V19.4999H43V18.3234ZM4.99988 18.3234L9.80519 15.2655L8.19456 12.7345L1.99988 16.6766V19.4999H4.99988V18.3234Z"
        fill="currentColor"
      />
      <path
        d="M24 30.0334L44.5039 18.3169L46 18V38C46 41.3137 43.3137 44 40 44H8C4.68629 44 2 41.3137 2 38V18H3L24 30.0334Z"
        fill="currentColor"
      />
      <path d="M8 4V20.8905L11 22.6048V7H37V22.6048L40 20.8906V4H8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 14L15 14L15 11L25 11L25 14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M33 14L28 14L28 11L33 11L33 14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M33 20L15 20L15 17L33 17L33 20Z" fill="currentColor" />
    </svg>
  );
};
