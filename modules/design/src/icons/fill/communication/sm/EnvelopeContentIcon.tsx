import type { SVGProps } from "react";

export const EnvelopeContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.49067 7.37135L3 8.7739V9.88186L12 14.382L21 9.88187V8.7739L18.5093 7.37135L19.4907 5.62866L23 7.60483V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V7.60483L4.50933 5.62866L5.49067 7.37135Z"
        fill="currentColor"
      />
      <path d="M20 1H4V10.382L6 11.382V3H18V11.382L20 10.382V1Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 8L8 8.00001L8 6.00001L16 6L16 8Z" fill="currentColor" />
    </svg>
  );
};
