import type { SVGProps } from "react";

export const ShoeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.8388 17.7802L23 17V16.1135C23 14.2825 21.7567 12.6852 19.9817 12.2359L15.1 11L11 6H10L9.27037 6.97284C7.99661 8.67119 5.61795 9.07864 3.85157 7.90104L2.5 7H2V18H7V15.5L11.343 17.1286C13.7353 18.0257 16.3275 18.2511 18.8388 17.7802Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
