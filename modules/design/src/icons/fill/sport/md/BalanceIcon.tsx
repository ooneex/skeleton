import type { SVGProps } from "react";

export const BalanceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.5 30.9999L12 31L12 10H19V16L21.103 16.5054C22.1991 16.7688 22.861 17.8854 22.566 18.9734L20.8047 25.4697L18.3047 24.9697L19 19.5232L15.7598 19.9999L14.5 30.9999Z"
        fill="currentColor"
      />
      <path d="M28 9V11L19 11.5H12L4 11V9H28Z" fill="currentColor" />
      <path
        d="M16 7.5C17.6569 7.5 19 6.15685 19 4.5C19 2.84315 17.6569 1.5 16 1.5C14.3431 1.5 13 2.84315 13 4.5C13 6.15685 14.3431 7.5 16 7.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
